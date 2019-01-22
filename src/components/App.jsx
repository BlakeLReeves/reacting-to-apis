import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import { Container, Row, Col, Button } from 'reactstrap';
import FilmCard from './FilmCard';
import PeopleCard from './PeopleCard';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            films: [],
            people: [],
            hasLoaded: null
        };
    }

    async componentDidMount() {
        try {
            let res = await fetch('https://ghibliapi.herokuapp.com/films');
            let films = await res.json();
            this.setState({ films });
            console.log(films);

            let res2 = await fetch('https://ghibliapi.herokuapp.com/people');
            let people = await res2.json();
            this.setState({ people });
            console.log(people);

        } catch (e) {
            console.log(e);
        }
    }

    renderFilms() {
        return this.state.films.map(film => {
            return <FilmCard key={film.id} film={film} />
        })
    }

    renderPeople() {
        return this.state.people.map(person => {
            return <PeopleCard key={person.id} person={person} />
        })
    }

    handleToggle() {
        this.setState({ hasLoaded: true });
    }

    handleToggle2() {
        this.setState({ hasLoaded: false });
    }

    render() {
        if (this.state.hasLoaded === false) {
            return (
                <>
                    <Container fluid className="bg-info">
                        <Row>
                            {this.renderPeople()}
                        </Row>
                    </Container>
                </>
            );
        }
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
                                <Button
                                    onClick={(e) => this.handleToggle2(e.target)}
                                    className="mx-auto d-block mb-2"
                                    outline color="dark"
                                    size="lg"
                                >Load People</Button>
                            </Col>
                        </Row>
                    </Container>
                </>
            );
        }
    }
}

export default App;