import { DataContext } from "../data/DataContext";
import { useGenericContext } from "../utils/hooks";
import { replaceAll } from "../utils/replace";
import "./Header.css"

const Header = () => {
	const {data: {greeting: {message, smallHeader}, replacer}} = useGenericContext(DataContext);
	
	const formattedGreeting = replaceAll(message, replacer);
	const formattedSmallHeader = replaceAll(smallHeader, replacer);

	return (
		<section id="header">
			<h2 id="header_small">{formattedSmallHeader}</h2>
			<h1 id="header_greet">{formattedGreeting}</h1>
		</section>
	);
};
export default Header;