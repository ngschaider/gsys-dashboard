import { useForm } from "../../utils/hooks";
import { getData, setData } from "../../data/DataManager";

const GreetingSettings = () => {
	const data = getData();

	const { values, onChange, onSubmit } = useForm(data.greeting, () => {
		const newData = {
			...data,
			greeting: {
				message: values.message,
				smallHeader: values.smallHeader,
			}
		}
		setData(newData);
	});

	return (
		<>
			<form onSubmit={onSubmit}>
				<span>Kleine Überschrift</span>
				<br />
				<input value={values.smallHeader} onChange={onChange} name="smallHeader" />
				<br />
				<br />
				<span>Nachricht</span>
				<br />
				<input value={values.message} onChange={onChange} name="message" />
				<br />
				<br />
				<input type="submit" value="Speichern" />
			</form>
		</>
	);
};
export default GreetingSettings;