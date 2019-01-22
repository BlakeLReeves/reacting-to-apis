import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import { Container, Row, Col, Button } from 'reactstrap';
import FilmCard from './FilmCard';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            films: [],
            hasLoaded: false
        };
    }

    async componentDidMount() {
        try {
            let res = await fetch('https://ghibliapi.herokuapp.com/films');
            let films = await res.json();
            this.setState({ films });
            console.log(films);
        } catch (e) {
            console.log(e);
        }
    }

    renderFilms() {
        return this.state.films.map(film => {
            return <FilmCard key={film.id} film={film} />
        })
    }

    handleToggle() {
        this.setState({ hasLoaded: true });
    }

    render() {
        if (this.state.hasLoaded === true) {
            return (
                <>
                    <Container fluid className="bg-info">
                        <Row>
                            {this.renderFilms()}
                        </Row>
                    </Container>
                </>
            );
        } else {
            return (
                <>
                    <Container fluid className="">
                        <Row>
                            <Col>
                                <img src="https://ghibliapi.herokuapp.com/images/logo.svg" className="mx-auto d-block" alt="Studio Ghibli Logo"/>
                                <Button
                                    onClick={(e) => this.handleToggle(e.target)}
                                    className="mx-auto d-block mb-2"
                                    outline color="dark"
                                    size="lg"
                                >Load Films</Button>
                            </Col>
                        </Row>
                    </Container>
                </>
            );
        }
    }
}

export default App;