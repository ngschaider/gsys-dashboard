export type DataSourceConfig = {
	driver: string;

	// localStorage
	storageKey?: string;

	// server
	address?: string;
	token?: string;
}

type BookmarkConfig = {
	url: string;
	name: string;
	categoryId: string;
};

type AppConfig = {
	icon: string;
	name: string;
	url: string;
	displayUrl: string;
};

type Category = {
	id: string;
	name: string;
};

type GreetingConfig = {
	smallHeader: string;
	message: string;
};

type Theme = {

}

export type ReplacerConfig = Record<string, string>;

export type AppData = {
	bookmarkCategories: Category[];
	themes: Theme[];
	bookmarks: BookmarkConfig[];
	apps: AppConfig[];
	greeting: GreetingConfig;
	replacer: ReplacerConfig;
};


export class DataSource {
	public getData(): AppData|null {
		throw new Error("Not implemented");
	}

	public setData(appData: AppData) {
		throw new Error("Not implemented");
	}
}
