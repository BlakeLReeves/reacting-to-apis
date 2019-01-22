import React from 'react';
import { Col, Card, CardBody, CardTitle, CardText, CardSubtitle } from 'reactstrap';

const PeopleCard = (props) => {
    return (
        <Col className="p-2" sm="12">
            <Card className="bg-light">
                <CardBody>
                    <CardTitle 
                    className="border border-dark border-top-0 border-left-0 border-right-0
                    font-weight-bold"
                    >{props.person.name}
                    </CardTitle>
                    <CardText><span className="font-weight-bold">Age: </span>{props.person.age}</CardText>
                    <CardText><span className="font-weight-bold">Gender: </span>{props.person.gender}</CardText>
                    <CardSubtitle
                    className="border border-dark border-bottom-0 border-left-0 border-right-0"
                    ><span className="font-weight-bold">url: </span><a key={props.person.url} href={props.person.url} target="_blank" rel="noopener noreferrer">{props.person.url}</a></CardSubtitle>
                </CardBody>
            </Card>
        </Col>
    );
}

export default PeopleCard;