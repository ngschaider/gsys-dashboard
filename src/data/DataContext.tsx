import React, { ReactNode } from "react";
import { DataSource } from "./DataSource";

import JsonDataSource from "./JsonDataSource";
import LocalStorageDataSource from "./LocalStorageDataSource";

const dataSources: Record<string, DataSource> = {
	json: new JsonDataSource(),
	localStorage: new LocalStorageDataSource()
};

type Config = {
	driver: "localStorage",
}

const configStr = localStorage.getItem("datasource");

const config: Config = configStr ? JSON.parse(configStr) : { driver: "localStorage" };

if(!configStr) {
	localStorage.setItem("datasource", JSON.stringify(config));
}

const dataSourceName = config.driver;
export const dataSource = dataSources[dataSourceName];
const appData = dataSource.getData();

export const DataContext = React.createContext(appData);

export const DataProvider = ({ children }: { children?: ReactNode }) => {
	return <DataContext.Provider value={appData}>{children}</DataContext.Provider>;
};
