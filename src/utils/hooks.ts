import { ChangeEvent, Context, createContext, FormEvent, useContext, useState } from "react";

export const useForm = <T>(initialValues: T, onSubmitCb?: (values: T) => void, onChangeCb?: (values: T) => void) => {
	const [values, setValues] = useState(initialValues);

	const onChange = <T>(e: ChangeEvent<HTMLInputElement|HTMLSelectElement>) => {
		setValue<T>(e.target.name, e.target.value);
		onChangeCb?.(values);
	};

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onSubmitCb?.(values);
	};

	const setValue = <T = string>(key: string, value: any) => {
		setValues({
			...values,
			[key]: value as T
		});
	}

	return {
		values,
		onChange,
		onSubmit,
		setValue,
	};
};


export const createGenericContext = <T extends unknown>() => {
	return createContext<T|undefined>(undefined);
};

export const useGenericContext = <T>(context: Context<T|undefined>): T => {
	const value = useContext(context);
	if(!value) {
		throw new Error("useGenericContext must be used within a Provider");
	}

	return value;
};