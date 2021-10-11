import AppHeader from "./AppHeader";
import NotHalloween from "./NotHalloween";
import Halloween from "./Halloween";

const DaysTo = ({daysDiff, totalDays}) => {
	if (daysDiff === 0) {
		return <Halloween />;
	} else {
		return (
			<div>
				<AppHeader />
				<NotHalloween daysDiff={daysDiff} totalDays={totalDays} />
			</div>
		);
	}
};

export default DaysTo;
