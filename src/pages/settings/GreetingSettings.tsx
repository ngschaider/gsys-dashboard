import { useForm } from "../../utils/hooks";
import { DataContext, dataSource } from "../../data/DataContext";
import { useContext } from "react";

const GreetingSettings = () => {
	const appData = useContext(DataContext);

	const { values, onChange, onSubmit } = useForm(appData.greeting, () => {
		appData.greeting.message = values.message;
		appData.greeting.smallHeader = values.smallHeader;
		dataSource.setData(appData);
	});

	return (
		<>
			<h2>Einstellungen: Begrüßung</h2>
			<form onSubmit={onSubmit}>
				<br />
				<span>Kleine Überschrift</span>
				<br />
				<input value={values.smallHeader} onChange={onChange} name="smallHeader" />
				<br />
				<br />
				<br />
				<span>Nachricht</span>
				<br />
				<input value={values.message} onChange={onChange} name="message" />
				<input type="submit" value="Speichern" />
			</form>
		</>
	);
};
export default GreetingSettings;