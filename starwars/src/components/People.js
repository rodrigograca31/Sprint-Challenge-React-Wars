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
		<Card className="text-white bg-primary">
			<CardBody>
				<CardTitle>{props.data.name}</CardTitle>
				<CardSubtitle>{props.data.gender}</CardSubtitle>
				<CardText>{props.data.url}</CardText>
				<a href={props.data.url} target="_blank">
					<Button>Open</Button>
				</a>
			</CardBody>
		</Card>
	);
};

export default People;
