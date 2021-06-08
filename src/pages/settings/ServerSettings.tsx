import { MouseEvent, useState } from "react";
import { DataContext } from "../../data/DataContext";
import { ServerConfig } from "../../data/DataManager";
import { useForm, useGenericContext } from "../../utils/hooks";

const ServerSettings = () => {
	const {data, setData} = useGenericContext(DataContext);
    const [newServers, setNewServers] = useState(data.servers);

    const onDeleteClicked = (serverToDelete: ServerConfig) => {
        setNewServers(newServers.filter(server => server !== serverToDelete));
    };
    
    const save = (e: MouseEvent<HTMLButtonElement>) => {
        setData({
            ...data,
            servers: newServers
        });
    };

    const {onChange, onSubmit, values} = useForm<ServerConfig>({
        id: 0,
        name: "",
    }, values => {
        if(!values.id || !values.name || isNaN(values.id) || newServers.find(server => server.id === values.id)) {
            return;
        }
        setNewServers([
            ...newServers,
            values,
        ]);
    });

	return (
        <>
            <span>Server hinzufügen</span>
            <br />
            <form onSubmit={onSubmit}>
                <span>ID</span><br />
                <input type="text" name="id" value={values.id} onChange={e => onChange<number>(e)} />
                <br />
                <br />
                <span>Name</span><br />
                <input type="text" name="name" value={values.name} onChange={onChange} />
                <br />
                <br />
                <input type="submit" value="Hinzufügen" /> 
            </form>
            <table style={{marginTop: "40px"}}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th style={{width: "100px"}}>Aktionen</th>
                    </tr>
                </thead>
                <tbody>
                    {newServers.map(newServer => (
                        <tr key={newServer.id}>
                            <td>{newServer.id}</td>
                            <td>{newServer.name}</td>
                            <td><button onClick={() => onDeleteClicked(newServer)}>Löschen</button></td>
                        </tr>
                    ))}
                    {newServers.length === 0 && (
                        <tr>
                            <td colSpan={2}><i>Keine Einträge gefunden</i></td>
                        </tr>
                    )}
                </tbody>
            </table>
            <button onClick={save} style={{marginTop: "40px"}}>Speichern</button>
        </>
	);
};
export default ServerSettings;