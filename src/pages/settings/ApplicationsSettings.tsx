import { MouseEvent, useState } from "react";
import { IconName } from "../../components/DynamicIcon";
import { DataContext } from "../../data/DataContext";
import { AppConfig } from "../../data/DataManager";
import { useForm, useGenericContext } from "../../utils/hooks";

const ApplicationsSettings = () => {
	const {data, setData} = useGenericContext(DataContext);
    const [newApps, setNewApps] = useState<AppConfig[]>(data.apps);

    const onDeleteClicked = (appToDelete: AppConfig) => {
        setNewApps(newApps.filter(app => app.name !== appToDelete.name));
    };
    
    const saveNewApps = (e: MouseEvent<HTMLButtonElement>) => {
        setData({
            ...data,
            apps: newApps
        });
    }

    const {onChange, onSubmit, values} = useForm({
        icon: IconName.None,
        name: "",
        url: "",
        displayUrl: "",
    }, values => {
        if(!values.icon || !values.name || !values.url || !values.displayUrl || newApps.find(app => app.name === values.name)) {
            console.log("something's missing");
            console.log(values);
            return;
        }
        setNewApps([
            ...newApps,
            {
                ...values,
                icon: values.icon as IconName,
            }
        ]);
    });
    

	return (
        <>
            <span>Server ID hinzufügen</span>
            <br />
            <form onSubmit={onSubmit}>
                <span>Icons</span><br />
                <select name="icon" value={values.icon} onChange={e => onChange<IconName>(e)}>
                    {Object.values(IconName).map(iconName => ( 
                        <option key={iconName} value={iconName}>{iconName}</option>
                    ))}
                </select>
                <br />
                <br />
                <span>Name</span><br />
                <input type="text" name="name" value={values.name} onChange={onChange} />
                <br />
                <br />
                <span>URL</span><br />
                <input type="text" name="url" value={values.url} onChange={onChange} />
                <br />
                <br />
                <span>Anzeige-URL</span><br />
                <input type="text" name="displayUrl" value={values.displayUrl} onChange={onChange} />
                <br />
                <br />
                <input type="submit" value="Hinzufügen" /> 
            </form>
            <table style={{marginTop: "40px"}}>
                <thead>
                    <tr>
                        <th>Icon</th>
                        <th>Name</th>
                        <th>URL</th>
                        <th>Anzeige-URL</th>
                        <th style={{width: "100px"}}>Aktionen</th>
                    </tr>
                </thead>
                <tbody>
                    {newApps.map(newApp => (
                        <tr key={newApp.name}>
                            <td>{newApp.icon}</td>
                            <td>{newApp.name}</td>
                            <td>{newApp.url}</td>
                            <td>{newApp.displayUrl}</td>
                            <td><button onClick={() => onDeleteClicked(newApp)}>Löschen</button></td>
                        </tr>
                    ))}
                    {newApps.length === 0 && (
                        <tr>
                            <td colSpan={2}><i>Keine Einträge gefunden</i></td>
                        </tr>
                    )}
                </tbody>
            </table>
            <button onClick={saveNewApps} style={{marginTop: "40px"}}>Speichern</button>
        </>
	);
};
export default ApplicationsSettings;