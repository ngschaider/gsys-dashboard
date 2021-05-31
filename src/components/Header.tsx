import { useContext } from "react";
import { DataContext } from "../data/DataContext";
import { replaceAll } from "../utils/replace";
import "./Header.css"

const Header = () => {
	const {data: {greeting: {message, smallHeader}, replacer}} = useContext(DataContext);
	
	const formattedGreeting = replaceAll(message, replacer);
	const formattedSmallHeader = replaceAll(smallHeader, replacer);

	return (
		<section id="header">
			<p>
				<h2 id="header_small">{formattedSmallHeader}</h2>
			</p>
			<h1 id="header_greet">{formattedGreeting}</h1>
		</section>
	);
};
export default Header;