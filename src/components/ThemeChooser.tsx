import { useContext, useState } from "react";
import "./ThemeChooser.css";
import { DataContext } from "../data/DataContext";

const ThemeChooser = () => {
	/* const [hidden, setHidden] = useState(true)
	const { themes } = useContext(DataContext);

	const toggleDropdown = () => {
		setHidden(!hidden);
	};

	const onThemeChosen = (themeDef) => {};*/

	return (
		<div className="ThemeChooser">
			{/*<button onClick={toggleDropdown}>{hidden ? "Theme" : "Close"}</button>
			<div className={hidden ? "hidden" : ""}>
				{themeDefinitions.map((themeDef) => (
					<button onClick={() => onThemeChosen(themeDef)}>
						{themeDef.name}
					</button>
				))}
			</div>*/}
		</div>
	);
};
export default ThemeChooser;