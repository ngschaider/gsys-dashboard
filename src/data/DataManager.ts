import EventEmitter from "events";
import API, { UserData } from "../API";
import { IconName } from "../components/DynamicIcon";

export type LinkConfig = {
	url: string;
	name: string;
	categoryId: string;
};

export type AppConfig = {
	icon: IconName;
	name: string;
	url: string;
	displayUrl: string;
};

export type LinkCategory = {
	id: string;
	name: string;
};

export type GreetingConfig = {
	smallHeader: string;
	message: string;
};

export type ServerConfig = {
    id: number;
    name: string;
}

export type ReplacerConfig = Record<string, string>;

export type AppData = {
	linkCategories: LinkCategory[];
	links: LinkConfig[];
	apps: AppConfig[];
	greeting: GreetingConfig;
    replacer: ReplacerConfig;
    servers: ServerConfig[];
};

const defaultData = {
    linkCategories: [],
    links: [],
    apps: [],
    greeting: {
        smallHeader: "{date}",
        message: "Hello"
    },
    replacer: {},
    themes: [],
    servers: [],
};

export enum DataManagerEvent {
    DataChanged = "DataChanged",
    DataSaved = "DataSaved",
    InitComplete = "InitComplete",
    UserChanged = "UserChanged",
};

class DataManager extends EventEmitter {

    public initializing: boolean = true;
    private _data: AppData = defaultData;
    private _user: UserData|null = null;

    public get data() {
        return this._data;
    }

    public get user() {
        return this._user;
    }

    constructor() {
        super();
        this.init().then(() => {
            this.initializing = false;
            this.emit(DataManagerEvent.InitComplete, this.data);
        });
    }

    private async init() {
        await this.refreshData();
        await this.refreshUser();
    }

    public async setData(data: AppData) {
        this._data = data;
        this.emit(DataManagerEvent.DataChanged, this.data);
        this.save();
    }

    public async refreshUser() {
        const res = await API.me();
        if(res.type === "success" && res.user) {
            this._user = res.user;
            this.emit(DataManagerEvent.UserChanged, this.user);
        }
    }

    public async refreshData() {
        const res = await API.getDashboardData();
        if(res.type === "success" && res.data) {
            this._data = res.data;
            this.emit(DataManagerEvent.DataChanged, this.data);
        }
    }

    public async save() {
        if(!this.data) return;
        await API.setDashboardData(this.data);
        this.emit(DataManagerEvent.DataSaved, this.data);
    }
    

}

export default new DataManager();