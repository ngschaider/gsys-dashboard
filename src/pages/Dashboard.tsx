import React from "react";
import Header from "../components/Header";
import Applications from "../components/Apps";
import Links from "../components/Links";
import SettingsButton from "../components/SettingsButton";
import Search from "../components/Search";
import Servers from "../components/Servers";

const Dashboard = () => {
	return (
		<>
			<SettingsButton />

			<main id="container" className="fade">
				<Search />

				<Header />

				<Applications />

				<Servers />

				<Links />
			</main>
		</>
	);
};
export default Dashboard;