import React from "react";

const UserOutput = (props) => {
	return (
		<div>
			<p className="userOutput">
				{props.username} <br />
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
				repellendus omnis dolorem mollitia repellat. Deleniti commodi magni
				neque libero distinctio sapiente perspiciatis est quibusdam nobis
				adipisci voluptatem ea, qui dolorum?
			</p>
			<p className="userOutput">
				{props.username} <br />
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero,
				consequuntur? Fugit, mollitia natus. Officia quasi inventore unde quos,
				nostrum commodi. Amet reiciendis nostrum ducimus aspernatur sed
				praesentium, quibusdam ipsa odit!
			</p>
		</div>
	);
};

export default UserOutput;
