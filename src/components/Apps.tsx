import React from "react";
import "./Apps.css"
import { DataContext } from "../data/DataContext";
import { useGenericContext } from "../utils/hooks";
import DynamicIcon from "./DynamicIcon";

const Applications = () => {
	const {data: { apps }} = useGenericContext(DataContext);

	if (apps.length === 0) return null;

	return (
		<section className="Apps">
			<h3>Applikationen</h3>
			<div className="AppsLoop">
				{apps.map(app => (
					<div className="AppsItem" key={app.name}>
						<div className="AppsIcon">
							<DynamicIcon icon={app.icon} size="2.5em" />
						</div>
						<div className="AppsText">
							<a href={app.url}>{app.name}</a>
							<span className="AppAddress">{app.displayUrl}</span>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};
export default Applications;