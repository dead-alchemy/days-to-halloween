const ProgressBar = ({daysDiff, totalDays}) => {
	const percent = Math.floor(((totalDays - daysDiff) / totalDays) * 100);

	return (
		<div className="progress-bar">
			<div
				className="progress-bar__fill"
				style={{
					width: `${percent}%`,
				}}
			></div>
		</div>
	);
};

export default ProgressBar;
