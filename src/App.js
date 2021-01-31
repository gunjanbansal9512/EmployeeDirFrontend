import "./App.css";
import Employees from "./Employees";
import { useState, useEffect } from "react";

function App() {
	const [appState, setAppState] = useState({
		loading: false,
		repos: [],
	});

	// const apiUrl = `http://127.0.0.1:5000/`;
	const apiUrl = `https://employeedirectorybackend.herokuapp.com/EmployeeData.php`;
	useEffect(() => {
		setAppState({ loading: true });

		fetch(apiUrl)
			.then((res) => res.json())
			.then((repos) => {
				setAppState({ loading: false, repos: repos });
			});
	}, [setAppState, apiUrl]);

	if (appState.loading === true) {
		return <p>Please wait</p>;
	} else {
		return (
			<div>
				<Employees data={appState.repos} />
			</div>
		);
	}
}

export default App;
