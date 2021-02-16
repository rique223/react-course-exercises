import React from "react";

const CharComponent = ({ letter, click }) => {
	const pStyle = {
		display: "inline-block",
		padding: "16px",
		textAlign: "center",
		margin: "16px",
		border: "1px solid black",
		fontSize: "2.5rem",
	};

	return (
		<div style={pStyle} onClick={click}>
			{letter}
		</div>
	);
};

export default CharComponent;
