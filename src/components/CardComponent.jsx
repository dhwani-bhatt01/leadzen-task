import React, { useState } from "react";
import CardProperty from "./CardProperty";

const CardComponent = ({ data }) => {
	const [isHidden, setIsHidden] = useState(true);
	return (
		<div className="shadow-md px-8 py-10 max-w-5xl mb-8 rounded-xl">
			<div className="flex flex-col sm:grid grid-cols-5 gap-5 sm:items-center">
				<p>{data.username}</p>
				<CardProperty title="Contact" value={data.name} />
				<CardProperty title="City" value={data.address.city} />
				<CardProperty title="State" value={data.address.street} />

				<button
					className="bg-[#FC3D3D] py-1 px-6 rounded-3xl text-white hover:bg-red-600"
					onClick={() => setIsHidden((prev) => !prev)}
				>
					{isHidden ? "View Details" : "Hide Details"}
				</button>
			</div>
			<div>
				{isHidden ? null : (
					<div className="shadow-md px-8 py-14 max-w-5xl rounded-xl">
						<div>
							<p className="font-bold mb-3">Description</p>
							<p className="mb-6">{data.company.catchPhrase}</p>
						</div>
						<div className="flex gap-36">
							<div className="">
								<CardProperty title="Contact Person" value={data.name} />
								<CardProperty title="Designation" value={data.company.name} />
								<CardProperty title="Email" value={data.email} />
								<CardProperty title="Phones" value={data.phone} />
							</div>
							<div className="">
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
