import { useState } from "react";
import UserOutput from "./components/UserOutput";
import UserInput from "./components/UserInput";
import "./App.css";

const App = () => {
	const [username, setUsername] = useState("Renjia");

	const style = {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	};

	const usernameHandler = (event) => {
		setUsername(event.target.value);
	};

	return (
		<div className="App" style={style}>
			<UserInput handler={usernameHandler} username={username} />
			<UserOutput username={username} />
			<UserOutput username={username} />
			<UserOutput username={username} />
			<UserOutput username={username} />
		</div>
	);
};

export default App;
