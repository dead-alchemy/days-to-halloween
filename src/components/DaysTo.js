import NotHalloween from "./NotHalloween";
import Halloween from "./Halloween";

const DaysTo = ({daysDiff, totalDays}) => {
	if (daysDiff === 0) {
		return <Halloween />;
	} else {
		return <NotHalloween daysDiff={daysDiff} totalDays={totalDays} />;
	}
};

export default DaysTo;
