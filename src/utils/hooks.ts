import { ChangeEvent, FormEvent, useState } from "react";

export const useForm = <T>(initialValues: T, onSubmitCb?: (values: T) => void, onChangeCb?: (values: T) => void) => {
	const [values, setValues] = useState(initialValues);

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValues({
			...values,
			[e.target.name]: e.target.value
		});
		onChangeCb?.(values);
	};

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onSubmitCb?.(values);
	};

	return {
		values,
		onChange,
		onSubmit
	};
};