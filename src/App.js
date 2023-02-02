import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
	const [cardData, setCardData] = useState([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => setCardData(users));
	}, []);

	return (
		<div className="p-4">
			<Card cardData={cardData} />
		</div>
	);
}

export default App;
