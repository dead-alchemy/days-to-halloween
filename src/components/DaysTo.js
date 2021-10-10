import {differenceInCalendarDays} from "date-fns";
import NotHalloween from "./NotHalloween";
import Halloween from "./Halloween";

const DaysTo = () => {
	const curDate = new Date();
	const thisYear = curDate.getFullYear();
	let halloween = new Date(thisYear, 9, 31);
	let daysDiff = differenceInCalendarDays(halloween, curDate);

	if (daysDiff < 0) {
		halloween = halloween.setFullYear(thisYear + 1);
		daysDiff = differenceInCalendarDays(halloween, curDate);
	}

	if (daysDiff === 0) {
		return <Halloween />;
	} else {
		return <NotHalloween daysDiff={daysDiff} />;
	}
};

export default DaysTo;
