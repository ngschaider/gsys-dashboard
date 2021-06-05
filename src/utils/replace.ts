import DataManager, { ReplacerConfig } from "../data/DataManager";

const replacer: Record<string, (options: any) => string> = {
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
		const firstName = DataManager.user?.firstName;
		return firstName ?? "";
	},
	lastName: (options: any) => {
		const lastName = DataManager.user?.lastName;
		return lastName ?? "";
	},
};

export const replace = (input: string, toReplace: string, replacerName: string, options?: Record<string, any>) => {
	if (!replacer[replacerName]) {
		throw new Error("Replacer '" + replacer + "' not found!");
	}

	const value = replacer[replacerName](options);
	return input.replace("{" + toReplace + "}", value);
};

export const replaceAll = (input: string, replacerConfig: ReplacerConfig) => {
	for (const [toReplace, replacerName] of Object.entries(replacerConfig)) {
		input = replace(input, toReplace, replacerName);
	}

	input = replace(input, "date", "date");
	input = replace(input, "firstName", "firstName");

	return input;
};
