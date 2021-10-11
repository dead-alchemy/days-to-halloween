import ProgressBar from "./ProgressBar";
import Card from "../UI/Card";

const NotHalloween = ({daysDiff, totalDays}) => {
	return (
		<div className="countdown">
			<Card>
				<div>{daysDiff}</div>
			</Card>

			<Card>
				<ProgressBar daysDiff={daysDiff} totalDays={totalDays} />
			</Card>
		</div>
	);
};

export default NotHalloween;
