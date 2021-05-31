import React, { createContext, PropsWithChildren } from "react";
import DataManager from "./DataManager";
import { AppData } from "./DataSource";



const dataManager = new DataManager();
dataManager.refresh();

export const DataContext = createContext<DataManager>(dataManager);

export const DataProvider = (props: PropsWithChildren<{}>) => {
    return (
        <DataContext.Provider value={dataManager} {...props} />
    );
};

export const DataConsumer = DataContext.Consumer;