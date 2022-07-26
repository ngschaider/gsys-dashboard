import { PropsWithChildren } from "react";
import { createGenericContext } from "../utils/hooks";
import DataManager, { Data } from "./DataManager";


type DataContextValue = {
    data: Data,
    setData: (data: Data) => void,
}

export const DataContext = createGenericContext<DataContextValue>();

export const DataProvider = (props: PropsWithChildren<{}>) => {
    return (
        <DataContext.Provider value={{
            data: DataManager.data,
            setData: (newData: Data) => {
                DataManager.data = newData;
            },
        }} {...props} />
    );
};

export const DataConsumer = DataContext.Consumer;