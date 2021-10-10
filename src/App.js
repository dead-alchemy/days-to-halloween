import {differenceInCalendarDays} from "date-fns";

import "./normalize.css";
import "./App.css";
import Card from "./UI/Card";
import AppHeader from "./components/AppHeader";
import DaysTo from "./components/DaysTo";

function App() {
	const curDate = new Date();
	const thisYear = curDate.getFullYear();
	let halloween = new Date(thisYear, 9, 31);
	let daysDiff = differenceInCalendarDays(halloween, curDate);

	if (daysDiff < 0) {
		halloween = halloween.setFullYear(thisYear + 1);
		daysDiff = differenceInCalendarDays(halloween, curDate);
	}

	return (
		<div className={`App ${daysDiff ? `App__not` : "App_halloween"}`}>
			<AppHeader />
			<Card>
				<DaysTo daysDiff={daysDiff} />
			</Card>
		</div>
	);
}

export default App;
