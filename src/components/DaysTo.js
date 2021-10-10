import NotHalloween from "./NotHalloween";
import Halloween from "./Halloween";

const DaysTo = ({daysDiff}) => {
	if (daysDiff === 0) {
		return <Halloween />;
	} else {
		return <NotHalloween daysDiff={daysDiff} />;
	}
};

export default DaysTo;
