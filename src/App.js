import {differenceInCalendarDays} from "date-fns";

import "./normalize.css";
import "./App.css";

import DaysTo from "./components/DaysTo";

function App() {
	const curDate = new Date();
	let thisYear = curDate.getFullYear();
	let halloween = new Date(thisYear, 9, 31);
	let daysDiff = differenceInCalendarDays(halloween, curDate);

	if (daysDiff < 0) {
		thisYear = thisYear + 1;
		halloween = halloween.setFullYear(thisYear);
		daysDiff = differenceInCalendarDays(halloween, curDate);
	}

	const totalDays = differenceInCalendarDays(
		new Date(thisYear + 1, 9, 31),
		halloween
	);

	return (
		<div className={`App ${daysDiff ? `App__not` : "App_halloween"}`}>
			<DaysTo daysDiff={daysDiff} totalDays={totalDays} />
		</div>
	);
}

export default App;
