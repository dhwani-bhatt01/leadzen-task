import React from "react";

const CardProperty = (props) => {
	const { title, value } = props;
	return (
		<div className="flex flex-col items-start my-5">
			<p className="font-bold uppercase">{title}</p>
			<p>{value}</p>
		</div>
	);
};

export default CardProperty;
