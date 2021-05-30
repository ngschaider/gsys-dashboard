import API from "../API";
import { AppData, DataSource, DataSourceConfig } from "./DataSource";
import LocalStorageDataSource from "./LocalStorageDataSource";
import ServerDataSource from "./ServerDataSource";

export const setConfig = (config: DataSourceConfig) => {
    API.baseUrl = config.address;
    localStorage.setItem("dataSourceConfig", JSON.stringify(config));
    dataSource = getNewDataSource(config);
}

export const getConfig = (): DataSourceConfig => {
    const configStr = localStorage.getItem("dataSourceConfig");

    if(!configStr) {
        const defaultConfig: DataSourceConfig = {
            driver: "localStorage",
            storageKey: "appData"
        }
        localStorage.setItem("dataSourceConfig", JSON.stringify(defaultConfig));
        return defaultConfig;
    } else {
        return JSON.parse(configStr);
    }
}

export const getNewDataSource = (config: DataSourceConfig): DataSource => {
    if(config.driver === "server") {
        return new ServerDataSource();
    }

    return new LocalStorageDataSource(config);
}

export const getDefaultData = () => {
    return {
        bookmarkCategories: [],
        bookmarks: [],
        apps: [],
        greeting: {
            smallHeader: "{date}",
            message: "Hello"
        },
        replacer: {},
        themes: []
    };
}

export const getData = () => {
    const defaults = getDefaultData();
    const data = dataSource.getData();

    if(!data) {
        setData(defaults);
        return defaults;
    }

    return data;
};

export const setData = (data: AppData) => {
    dataSource.setData(data);
}


const config = getConfig();
let dataSource = getNewDataSource(config);
