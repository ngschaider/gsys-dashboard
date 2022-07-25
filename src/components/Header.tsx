import { DataContext } from "../data/DataContext";
import { useGenericContext } from "../utils/hooks";
import { replaceAll } from "../utils/replace";
import "./Header.css"

const Header = () => {
	const {data: {greeting: {message, smallHeader}}} = useGenericContext(DataContext);

	return (
		<section id="header">
			<h2 id="header_small">{replaceAll(smallHeader)}</h2>
			<h1 id="header_greet">{replaceAll(message)}</h1>
		</section>
	);
};
export default Header;