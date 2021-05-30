import "./ThemeChooser.css";
import { getData } from "../data/DataManager";

const ThemeChooser = () => {
	/* const [hidden, setHidden] = useState(true)
	const { themes } = getData();

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