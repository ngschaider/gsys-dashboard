import React, { useContext } from "react";
import Icon from "@iconify/react";
import home from "@iconify/icons-mdi/home";

import { DataContext } from "../data/DataContext";

const Applications = () => {
	const { apps } = useContext(DataContext);

	if (apps.length === 0) return null;

	return (
		<section id="apps">
			<h3>Applications</h3>
			<div id="apps_loop">
				{apps.map((app) => (
					<div className="apps_item">
						<div className="apps_icon">
							<Icon icon={home} className="icon" />
						</div>
						<div className="apps_text">
							<a href="localhost">Application 1</a>
							<span id="app-address">localhost</span>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};
export default Applications;