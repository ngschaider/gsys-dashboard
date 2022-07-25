import DataManager from "../data/DataManager";

const replacer: Record<string, (options?: Record<string,string>) => string> = {
	date: (options: any) => {
		const date = new Date();
		const dateString = date.toLocaleDateString("de-DE", {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric"
		});
		return dateString;
	},
	firstName: (options: any) => {
		const firstName = DataManager.data?.firstName;
		return firstName ?? "";
	},
	lastName: (options: any) => {
		const lastName = DataManager.data?.lastName;
		return lastName ?? "";
	},
};

export const replace = (input: string, replacerName: string) => {
	if (!replacer[replacerName]) {
		throw new Error("Replacer '" + replacer + "' not found!");
	}

	const value = replacer[replacerName]();
	return input.replace("{" + replacerName + "}", value);
};

export const replaceAll = (input: string) => {
	input = replace(input, "date");
	input = replace(input, "firstName");

	return input;
};
