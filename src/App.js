import "./App.css";
import Card from "./UI/Card";
import AppHeader from "./components/AppHeader";
import DaysTo from "./components/DaysTo";

function App() {
	return (
		<div className="App">
			<AppHeader />
			<Card>
				<DaysTo />
			</Card>
		</div>
	);
}

export default App;
