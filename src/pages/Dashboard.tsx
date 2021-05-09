import React from "react";
import Header from "../components/Header";
import Applications from "../components/Applications";
import Bookmarks from "../components/Bookmarks";
import SettingsButton from "../components/SettingsButton";
import Search from "../components/Search";

const Dashboard = () => {
	return (
		<>
			<SettingsButton />

			<main id="container" className="fade">
				<Search />

				<Header />

				<Applications />

				<Bookmarks />
			</main>
		</>
	);
};
export default Dashboard;