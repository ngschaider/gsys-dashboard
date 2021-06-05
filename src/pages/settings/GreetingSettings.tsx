import { DataContext } from "../../data/DataContext";
import { useForm, useGenericContext } from "../../utils/hooks";

const GreetingSettings = () => {
	const {data, setData} = useGenericContext(DataContext);

	const { values, onChange, onSubmit } = useForm(data.greeting, values => {
		setData({
			...data,
			greeting: {
				message: values.message,
				smallHeader: values.smallHeader,
			}
		});
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