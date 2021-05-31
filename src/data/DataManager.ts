import EventEmitter from "events";
import { runInThisContext } from "vm";
import API from "../API";
import { AppData } from "./DataSource";

const defaultData = {
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

class DataManager extends EventEmitter {

    public data: AppData = defaultData;


    public async refresh() {
        const res = await API.getDashboardData();
        if(res.type === "success" && res.data) {
            this.data = res.data;
        }
    }

    public async save() {
        if(!this.data) return;
        await API.setDashboardData(this.data);
    }

}

export default DataManager;