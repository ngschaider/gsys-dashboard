import { DataSource, AppData } from "./DataSource";
//import config from "../../config.json";

export default class JsonDataSource extends DataSource {
	//absolutePath: string;

	init() {
		/*const relativePath = config.storage.path;
		this.absolutePath = path.relative("./", relativePath);*/
	}

	public getData(): AppData {
		/*const raw = fs.readFileSync();
		const value = JSON.parse(raw);

    return value;*/
		throw new Error("Not implemented");
	}

	public setData(appData: AppData) {
		throw new Error("Not implemented");
	}
}
