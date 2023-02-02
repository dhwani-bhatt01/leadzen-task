import React, { useState } from "react";
import CardProperty from "../CardProperty";

const CardComponent = ({ data }) => {
	const [isHidden, setIsHidden] = useState(true);
	return (
		<div className="shadow-md px-8 py-14 max-w-5xl  rounded-xl ">
			<div className="flex flex-col sm:flex-row justify-between gap-6 items-start sm:items-center">
				<p>{data.username}</p>
				<div className="flex flex-col items-start gap-1">
					<p className="font-bold uppercase">Contact</p>
					<p>{data.name}</p>
				</div>
				<div className="flex flex-col items-start gap-1">
					<p className="font-bold uppercase">City</p>
					<p>{data.address.city}</p>
				</div>
				<div className="flex flex-col items-start gap-1">
					<p className="font-bold uppercase">State</p>
					<p>{data.address.street}</p>
				</div>
				<button
					className="bg-[#FC3D3D] py-1 px-6 rounded-3xl text-white"
					onClick={() => setIsHidden((prev) => !prev)}
				>
					{isHidden ? "View Details" : "Hide Details"}
				</button>
			</div>
			<div>
				{isHidden ? null : (
					<div className="shadow-md px-8 py-14 max-w-5xl  rounded-xl">
						<div>
							<p className="font-bold mb-3">Description</p>
							<p className="mb-6">{data.company.catchPhrase}</p>
						</div>
						<div className="bg-purple-400 flex gap-36">
							<div className="bg-red-700">
								<CardProperty title="Contact Person" value={data.name} />
								<CardProperty title="Designation" value={data.company.name} />
								<CardProperty title="Email" value={data.email} />
								<CardProperty title="Phones" value={data.phone} />
							</div>
							<div className="bg-yellow-400">
								<CardProperty title="Address" value={data.address.suite} />
								<CardProperty title="City" value={data.address.street} />
								<CardProperty title="State" value={data.address.suite} />
								<CardProperty title="Zipcode" value={data.address.zipcode} />
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default CardComponent;
