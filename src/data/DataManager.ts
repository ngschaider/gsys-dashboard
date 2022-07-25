import EventEmitter from "events";
import { IconName } from "../components/DynamicIcon";

export type AppConfig = {
    name: string;
    icon: IconName;
    url: string;
    displayUrl: string;
}

export type GreetingConfig = {
    message: string;
    smallHeader: string;
}

export type BookmarkConfig = {
    url: string;
    name: string;
    categoryName: string;
}

export type BookmarkCategoryConfig = {
    name: string;
    displayName: string;
}

export type ServerConfig = {
    id: number;
    name: string;
}

export type Data = {	
    apps: AppConfig[];
    greeting: GreetingConfig;
    firstName: string;
    lastName: string;
    bookmarks: BookmarkConfig[];
    bookmarkCategories: BookmarkCategoryConfig[];
    servers: ServerConfig[];
};

const defaultData = {
    apps: [],
    greeting: {
        message: "Hello",
        smallHeader: "{date}",
    },
    firstName: "Max",
    lastName: "Mustermann",
    bookmarks: [],
    bookmarkCategories: [],
    servers: [],
};

export enum DataManagerEvent {
    DataChanged = "DataChanged",
    DataExported = "DataExported",
    DataImported = "DataImported",
    InitComplete = "InitComplete",
};

class DataManager extends EventEmitter {

    public initializing: boolean = true;
    private _data: Data = defaultData;

    public get data() {
        return this._data;
    }

    public async setData(data: Data) {
        this._data = data;
        this.emit(DataManagerEvent.DataChanged, this.data);
    }
    
    public async export() {

    }

    public async import(file: File) {

    }

}

export default new DataManager();