import { PropsWithChildren, useEffect, useState } from "react";
import { createGenericContext } from "../utils/hooks";
import DataManager, { Data, DataManagerEvent } from "./DataManager";


type DataContextValue = {
    data: Data,
    setData: (data: Data) => void,
}

export const DataContext = createGenericContext<DataContextValue>();

export const DataProvider = (props: PropsWithChildren<{}>) => {
    const [setData, setDashboardData] = useState<Data>(DataManager.data);

    useEffect(() => {
        DataManager.on(DataManagerEvent.DataChanged, setDashboardData);
        
        return () => {
            DataManager.off(DataManagerEvent.DataChanged, setDashboardData);
        }
    }, []);

    return (
        <DataContext.Provider value={{
            data: setData,
            setData: (data: Data) => {
                // we get "this is undefined" if using dataManager.setData wihout wrapping function
                // i don't know why.
                DataManager.setData(data);
            },
        }} {...props} />
    );
};

export const DataConsumer = DataContext.Consumer;