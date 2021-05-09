type TabListItemProps = {
	title: string;
};

export default ({ title }: TabListItemProps) => {
	return (
		<div>
			<p>{title}</p>
		</div>
	);
};
