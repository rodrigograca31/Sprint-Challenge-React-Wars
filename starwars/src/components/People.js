import React from "react";
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button
} from "reactstrap";

const People = props => {
	return (
		<Card className="card text-white bg-primary mb-3">
			<CardBody>
				<CardTitle>{props.data.name}</CardTitle>
				<CardSubtitle>{props.data.gender}</CardSubtitle>
				<CardText>{props.data.url}</CardText>
				<Button>Button</Button>
			</CardBody>
		</Card>
	);
};

export default People;
