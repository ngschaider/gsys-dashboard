import { ChangeEvent, FormEvent, useState } from "react";

export const useForm = <T>(initialValues: T, onSubmitCb?: (values: T) => void, onChangeCb?: (values: T) => void) => {
	const [values, setValues] = useState(initialValues);

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.name, e.target.value);
		onChangeCb?.(values);
	};

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onSubmitCb?.(values);
	};

	const setValue = (key: string, value: string) => {
		setValues({
			...values,
			[key]: value
		});
	}

	const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setValue(e.target.name, e.target.value);
		onChangeCb?.(values);
	}

	return {
		values,
		onChange,
		onSubmit,
		setValue,
		onSelectChange,
	};
};


export const useData = () => {
	
}