import { PropsWithChildren, useEffect, useState } from "react";
import { createGenericContext } from "../utils/hooks";
import DataManager, { Data, DataManagerEvent } from "./DataManager";


type DataContextValue = {
    data: Data,
    setData: (data: Data) => void,
}

export const DataContext = createGenericContext<DataContextValue>();

export const DataProvider = (props: PropsWithChildren<{}>) => {
    const [data, setData] = useState(DataManager.data);

    useEffect(() => {
        DataManager.on(DataManagerEvent.DataChanged, setData);

        return () => {
            DataManager.off(DataManagerEvent.DataChanged, setData);
        }
    }, []);

    return (
        <DataContext.Provider value={{
            data,
            setData: (newData: Data) => {
                DataManager.data = newData
            }
        }} {...props} />
    );
};

export const DataConsumer = DataContext.Consumer;