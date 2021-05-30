import React, { ChangeEvent, useState } from "react";
import GeneralSettings from "./settings/GeneralSettings";
import { Redirect } from "react-router-dom";
import GreetingSettings from "./settings/GreetingSettings";
import ReplacerSettings from "./settings/ReplacerSettings";
import "./Settings.css";
import DataSourceSettings from "./settings/DataSourceSettings";

const Settings = () => {
	const [activePage, setActivePage] = useState("general");

	const [redirect, setRedirect] = useState(false);

	const onCloseClicked = () => {
		setRedirect(true);
	}

	const onDropdownChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setActivePage(e.target.value);
	};

	return (
		<div className="container fade Settings">
			{redirect && <Redirect to="/" />}
			<h1>Settings</h1>

			<select onChange={onDropdownChange} value={activePage}>
				<option value="general">Grundlegendes</option>
				<option value="greeting">Begrüßung</option>
				<option value="replacer">Ersetzer</option>
				<option value="dataSource">Datenquelle</option>
			</select>

			<br />
			<br />
			<br />
			<br />
			{activePage === "general" && <GeneralSettings />}
			{activePage === "greeting" && <GreetingSettings />}
			{activePage === "replacer" && <ReplacerSettings />}
			{activePage === "dataSource" && <DataSourceSettings />}

			<br />
			<button onClick={onCloseClicked}>Schließen</button>
		</div>
	);
};
export default Settings;