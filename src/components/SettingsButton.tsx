import "./SettingsButton.css";
import Icon from "@iconify/react";
import React from "react";
import SettingsIcon from "@iconify/icons-raphael/smallgear";
import { Link } from "react-router-dom";

const SettingsButton = () => {
	return (
		<div className="settings-button">
			<Link to="/settings">
				<Icon icon={SettingsIcon} height="20" />
			</Link>
		</div>
	);
};
export default SettingsButton;