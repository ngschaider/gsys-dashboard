
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
};

export const replace = (input: string, replacerName: string) => {
	if (!replacer[replacerName]) {
		throw new Error("Replacer '" + replacer + "' not found!");
	}

	const value = replacer[replacerName]();
	return input.replace("{" + replacerName + "}", value);
};

export const replaceAll = (input: string) => {
	for(const [key] of Object.entries(replacer)) {
		input = replace(input, key);
	}

	return input;
};
