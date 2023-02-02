import { useEffect, useState } from "react";
import CardComponent from "./components/CardComponent";

function App() {
	const [cardData, setCardData] = useState([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => setCardData(users));
	}, []);

	return (
		<div className="p-4 w-fit mx-auto">
			{cardData.map((data) => {
				return <CardComponent data={data} />;
			})}
		</div>
	);
}

export default App;
