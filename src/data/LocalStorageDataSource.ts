import { AppData, DataSource, DataSourceConfig } from "./DataSource";

export default class LocalStorageDataSource extends DataSource {
	storageKey: string;

	constructor(config: DataSourceConfig) {
		super();
		this.storageKey = config.storageKey ?? "appData";
	}

	public setData(appData: AppData) {
		const raw = JSON.stringify(appData);
		localStorage.setItem(this.storageKey, raw);
	}

	public getData(): AppData|null {
		const raw = localStorage.getItem(this.storageKey);

		if(!raw) {
			return null;
		}

		const data = JSON.parse(raw) as AppData;

		return data;
	}
}
