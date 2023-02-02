import React from "react";

const CardProperty = (props) => {
	const { title, value } = props;
	return (
		<div className="flex flex-col items-start mb-9">
			<p className="font-bold">{title}</p>
			<p>{value}</p>
		</div>
	);
};

export default CardProperty;
