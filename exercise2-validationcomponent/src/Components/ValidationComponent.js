import React from "react";

const ValidationComponent = ({ inputLength }) => {
	const styleShort = {
		fontSize: "2.5rem",
		fontWeight: "bold",
		color: "red",
	};

	const styleLong = {
		fontSize: "2.5rem",
		fontWeight: "bold",
		color: "lightgreen",
	};

	let validation = null;

	validation =
		inputLength > 5 ? (
			<span style={styleLong}>Text long enough</span>
		) : (
			<span style={styleShort}>Text too short</span>
		);

	return <span>{validation}</span>;
};

export default ValidationComponent;
