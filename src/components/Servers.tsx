import React from "react";
import "./Servers.css";
import { DataContext } from "../data/DataContext";
import { useGenericContext } from "../utils/hooks";
import DynamicIcon, { IconName } from "./DynamicIcon";

const Servers = () => {
	const { data: {servers}} = useGenericContext(DataContext);

	if (servers.length === 0) return null;

	return (
		<section className="Servers">
			<h3>Server</h3>
			<div className="ServersLoop">
				{servers.map(server => (
					<div className="ServersItem" key={server.name}>
						<div className="ServersIcon">
							<DynamicIcon icon={IconName.CgScreen} size="2.5em" />
						</div>
						<div className="ServersText">
							<a href={"https://api.gsys.at/spice/connect?id=" + server.id} target="__blank">{server.name}</a>
							<span>SPICE</span>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};
export default Servers;