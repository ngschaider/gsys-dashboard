import React, { ChangeEvent, useState } from "react";
import GeneralSettings from "./settings/GeneralSettings";
import { Link } from "react-router-dom";
import GreetingSettings from "./settings/GreetingSettings";
import ReplacerSettings from "./settings/ReplacerSettings";

const Settings = () => {
	const [activePage, setActivePage] = useState("general");

	const onDropdownChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setActivePage(e.target.value);
	};

	return (
		<div className="container">
			<h1>Settings</h1>

			<select onChange={onDropdownChange} value={activePage}>
				<option value="general">Grundlegendes</option>
				<option value="greeting">Begrüßung</option>
				<option value="replacer">Replacer</option>
			</select>

			{activePage === "general" && <GeneralSettings />}
			{activePage === "greeting" && <GreetingSettings />}
			{activePage === "replacer" && <ReplacerSettings />}

			<Link to="/">Schließen</Link>
		</div>
	);
};
export default Settings;