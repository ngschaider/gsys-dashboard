import { AppData, DataSource } from "./DataSource";

export default class LocalStorageDataSource extends DataSource {
	storageKey = "data";

	public setData(appData: AppData) {
		const raw = JSON.stringify(appData);
		localStorage.setItem(this.storageKey, raw);
	}

	public getData(): AppData {
		const raw = localStorage.getItem(this.storageKey);

		if (!raw) {
			return this.getDefaults();
		}

		const data = JSON.parse(raw) as AppData;

		return data;
	}
}
