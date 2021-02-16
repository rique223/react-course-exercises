import "./App.css";
import { useState } from "react";

import ValidationComponent from "./Components/ValidationComponent";
import CharComponent from "./Components/CharComponent";

function App() {
	const [inputLength, setInputLength] = useState(0);
	const [inputLengthArray, setInputLengthArray] = useState([]);

	const changeListener = (event) => {
		setInputLength(event.target.value.length);
		setInputLengthArray(event.target.value.split(""));
	};

	const letterRemover = (index) => {
		const array = [...inputLengthArray];

		array.splice(index, 1);

		setInputLength(array.length);
		setInputLengthArray(array);
	};

	const style = {
		display: "flex",
		flexDirection: "column",
		height: "100vh",
		alignItems: "center",
		justifyContent: "center",
	};

	const inputStyle = {
		width: "40vw",
		border: "1px solid black",
		borderRadius: "15px",
		height: "4rem",
		fontSize: "3rem",
		margin: "10px",
	};

	const h1Style = {
		fontSize: "6rem",
		fontWeight: "200",
		color: "#ccc",
		margin: "10px 0",
	};

	const spanStyle = {
		fontSize: "5rem",
		fontWeight: "bold",
	};

	const divStyle = {
		flexDirection: "row",
	};

	return (
		<div className="App" style={style}>
			<h1 style={h1Style}>Input</h1>
			<input type="text" onChange={changeListener} style={inputStyle} />
			<span style={spanStyle}>{inputLength}</span>
			<ValidationComponent inputLength={inputLength} />
			<div style={divStyle}>
				{inputLengthArray.map((letter, index) => {
					return (
						<CharComponent
							click={() => letterRemover(index)}
							letter={letter}
							key={index}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default App;
