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

export type AppData = {
	bookmarkCategories: Category[];
	themes: Theme[];
	bookmarks: BookmarkConfig[];
	apps: AppConfig[];
	greeting: GreetingConfig;
	replacer: ReplacerConfig;
};

export type ReplacerConfig = Record<string, string>;

export class DataSource {
	public getDefaults(): AppData {
		return {
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
	}

	public getData(): AppData {
		throw new Error("Not implemented");
	}

	public setData(appData: AppData) {
		throw new Error("Not implemented");
	}
}
