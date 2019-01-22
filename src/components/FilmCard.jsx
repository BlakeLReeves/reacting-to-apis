import React from 'react';
import { Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';

const FilmCard = (props) => {
    return (
        <Col className="p-2" sm="12">
            <Card className="bg-light">
                <CardBody>
                    <CardTitle 
                    className="border border-dark border-top-0 border-left-0 border-right-0
                    font-weight-bold"
                    >Title: {props.film.title}
                    </CardTitle>
                    <CardText><span className="font-weight-bold">Description: </span>{props.film.description}</CardText>
                </CardBody>
            </Card>
        </Col>
    );
}

export default FilmCard;