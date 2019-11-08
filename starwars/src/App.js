import React from "react";
import "./App.css";
import axios from "axios";
import People from "./components/People";

const App = () => {
	// Try to think through what state you'll need for this app before starting. Then build out
	// the state properties here.

	// Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
	// side effect in a component, you want to think about which state and/or props it should
	// sync up with, if any.

	const [people, setPeople] = React.useState([]);
	const [filteredPeople, setFilteredPeople] = React.useState([]);
	const [search, setSearch] = React.useState("");

	React.useEffect(() => {
		axios
			.get("https://swapi.co/api/people/?format=json")
			.then(response => {
				return response.data;
			})
			.then(data => {
				console.log(data.results);
				setPeople(data.results);
				setFilteredPeople(data.results);
			});
		return () => {};
	}, []);

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
