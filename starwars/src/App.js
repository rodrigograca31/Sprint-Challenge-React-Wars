import React from "react";
import "./App.css";
import axios from "axios";
import People from "./components/People";
import { Button } from "reactstrap";

const App = () => {
	// Try to think through what state you'll need for this app before starting. Then build out
	// the state properties here.

	// Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
	// side effect in a component, you want to think about which state and/or props it should
	// sync up with, if any.

	const [people, setPeople] = React.useState([]);
	const [filteredPeople, setFilteredPeople] = React.useState([]);
	const [search, setSearch] = React.useState("");
	const [next, setNext] = React.useState(null);
	const [prev, setPrev] = React.useState(null);

	const [currURL, setCurrURL] = React.useState(
		"https://swapi.co/api/people/?format=json"
	);

	React.useEffect(() => {
		axios
			.get(currURL)
			.then(response => {
				return response.data;
			})
			.then(data => {
				console.log(data.results);

				setPrev(data.previous);
				setNext(data.next);
				setPeople(data.results);
				setFilteredPeople(data.results);
			});
		return () => {};
	}, [currURL]);

	const handleSearch = e => {
		setSearch(e.target.value);

		setFilteredPeople(
			people.filter(person => {
				if (
					person.name.toLocaleLowerCase().indexOf(e.target.value) !=
					-1
				) {
					return person;
				}
			})
		);
	};

	const prevHandler = () => {
		setCurrURL(prev);
	};

	const nextHandler = () => {
		setCurrURL(next);
	};
	return (
		<div className="container-fluid App">
			<div className="row">
				<div className="col-12">
					<h1 className="Header">React Wars</h1>
					<input
						className="form-control form-control-lg"
						type="text"
						placeholder="search by name"
						value={search}
						onChange={e => {
							handleSearch(e);
						}}
					/>
					<br />
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					{prev && (
						<Button
							color="primary"
							onClick={() => {
								prevHandler();
							}}
						>
							◀️ Prev
						</Button>
					)}{" "}
					{next && (
						<Button
							color="primary"
							onClick={() => {
								nextHandler();
							}}
						>
							Next ▶️
						</Button>
					)}
				</div>
			</div>
			<br />
			<div className="row">
				<div className="col-12">
					<div className="card-columns">
						{filteredPeople.map((curr, index) => {
							return <People data={curr} key={index} />;
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
