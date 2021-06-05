import React, { PropsWithChildren, useEffect, useState } from "react";
import { UserData } from "../API";
import { createGenericContext } from "../utils/hooks";
import DataManager, { AppData, DataManagerEvent } from "./DataManager";


type DataContextValue = {
    data: AppData,
    user: UserData|null,
    setData: (data: AppData) => void,
}

export const DataContext = createGenericContext<DataContextValue>();

export const DataProvider = (props: PropsWithChildren<{}>) => {
    const [data, setData] = useState<AppData>(DataManager.data);
    const [user, setUser] = useState<UserData|null>(DataManager.user);

    useEffect(() => {
        DataManager.on(DataManagerEvent.DataChanged, setData);
        DataManager.on(DataManagerEvent.UserChanged, setUser);
        
        return () => {
            DataManager.off(DataManagerEvent.DataChanged, setData);
            DataManager.off(DataManagerEvent.UserChanged, setUser);
        }
    }, []);

    return (
        <DataContext.Provider value={{
            data: data,
            user: user,
            setData: (data: AppData) => {
                // we get "this is undefined" if using dataManager.setData wihout wrapping function
                // i don't know why.
                DataManager.setData(data);
            },
        }} {...props} />
    );
};

export const DataConsumer = DataContext.Consumer;