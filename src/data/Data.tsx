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

export const defaultData = {
    apps: [],
    greeting: {
        message: "Hello",
        smallHeader: "{date}",
    },
    bookmarks: [],
    bookmarkCategories: [],
    servers: [],
};
