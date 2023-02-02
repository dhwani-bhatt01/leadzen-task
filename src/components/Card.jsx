import React from "react";
import CardComponent from "./CardComponent";

const Card = ({ cardData }) => {
	return (
		<div className="shadow-md px-8 py-14 max-w-5xl  rounded-xl ">
			{/* basic details */}
			<div className="">
				{cardData.map((data) => {
					return <CardComponent data={data} />;
				})}
			</div>
			{/* extended view
			{isHidden ? null : (
				<div className="shadow-md px-8 py-14 max-w-5xl  rounded-xl mt-16">
					<div>
						<p className="font-bold mb-3">Description</p>
						<p className="mb-6">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
							commodi saepe sed blanditiis, eveniet porro tenetur aut harum
							aliquam cupiditate laudantium voluptate inventore vero. Officiis
							explicabo recusandae itaque nihil iste?
						</p>
					</div>
					<div className="bg-purple-400 flex">
						<div className="bg-red-700">
							<CardProperty title="Contact Person" value="Abu Hasan" />
							<CardProperty title="Designation" value="Proprietor" />
							<CardProperty title="Email" value="helloservices1@gmail.com" />
							<CardProperty title="Phones" value="1234567890" />
						</div>
						<div className="bg-yellow-400">
							<CardProperty
								title="Address"
								value="Lorem ipsum dolor sit amet.</"
							/>
							<div>
								<p>City</p>
								<p>Proprietor</p>
							</div>
							<div>
								<p>Email</p>
								<p>helloservices1@gmail.com</p>
							</div>
							<div>
								<p>Phones</p>
								<p>1234567890</p>
							</div>
						</div>
					</div>
				</div>
			)} */}
		</div>
	);
};

export default Card;
