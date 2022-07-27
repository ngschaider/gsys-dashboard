import "./SettingsButton.css";
import { AiTwotoneSetting } from "react-icons/ai";
import { Link } from "react-router-dom";

const SettingsButton = () => {
	return (
		<div className="settings-button">
			<Link to="/settings">
				<AiTwotoneSetting height="20" />
			</Link>
		</div>
	);
};
export default SettingsButton;