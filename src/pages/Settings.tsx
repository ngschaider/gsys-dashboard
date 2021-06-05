import React, { ChangeEvent, useState } from "react";
import GeneralSettings from "./settings/GeneralSettings";
import { Redirect } from "react-router-dom";
import GreetingSettings from "./settings/GreetingSettings";
import ReplacerSettings from "./settings/ReplacerSettings";
import "./Settings.css";
import ServerSettings from "./settings/ServerSettings";
import ApplicationsSettings from "./settings/ApplicationsSettings";
import BookmarksSettings from "./settings/BookmarksSettings";
import BookmarkCategoriesSettings from "./settings/BookmarkCategoriesSettings";

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
				<option value="bookmarkCategories">Lesezeichen-Kategorien</option>
				<option value="bookmarks">Lesezeichen</option>
				<option value="server">Server (SPICE)</option>
				<option value="applications">Applikationen</option>
				<option value="replacer">Ersetzer</option>
			</select>

			<br />
			<br />
			<br />
			<br />
			{activePage === "general" && <GeneralSettings />}
			{activePage === "greeting" && <GreetingSettings />}
			{activePage === "bookmarkCategories" && <BookmarkCategoriesSettings />}
			{activePage === "bookmarks" && <BookmarksSettings />}
			{activePage === "server" && <ServerSettings />}
			{activePage === "applications" && <ApplicationsSettings />}
			{activePage === "replacer" && <ReplacerSettings />}

			<br />
			<button onClick={onCloseClicked}>Schließen</button>
		</div>
	);
};
export default Settings;