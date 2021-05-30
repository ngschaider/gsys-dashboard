import API from "../API";
import { AppData, DataSource } from "./DataSource";

export default class LocalStorageDataSource extends DataSource {

	public async setData(appData: AppData): Promise<void> {
		await API.updateDashboardData(appData);
	}

	public async getData(): Promise<AppData|null> {
		const res = await API.getDashboardData();
		if(res.type === "success") {
			return res.data;
		} else {
			return new Promise<null>(r => r(null));
		}
	}
}
