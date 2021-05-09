import { ReplacerConfig } from "../data/DataSource";

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
	}
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

	return input;
};
