const Card = (props) => {
	return (
		<section className={`Card ${props.className}`}>
			{props.children}
		</section>
	);
};

export default Card;
