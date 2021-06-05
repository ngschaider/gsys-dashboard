import { ChangeEvent, MouseEvent, useState } from "react";
import { DataContext } from "../../data/DataContext";
import { useGenericContext } from "../../utils/hooks";

const ServerSettings = () => {
	const {data, setData} = useGenericContext(DataContext);
    const [newServerIds, setNewServerIds] = useState(data.serverIds);

    const onDeleteClicked = (idToDelete: number) => {
        setNewServerIds(newServerIds.filter(id => id !== idToDelete));
    };


    const [idToAdd, setIdToAdd] = useState<string>("");

    const onIdToAddChanged = (e: ChangeEvent<HTMLInputElement>) => { 
        setIdToAdd(e.target.value);
    }
    
    const onAddClicked = (e: MouseEvent<HTMLButtonElement>) => {
        const toInt = parseInt(idToAdd);
        if(isNaN(toInt)) return;
        if(newServerIds.includes(toInt)) return;
        setNewServerIds([...newServerIds, toInt]);
    }
    
    const saveNewServerIds = (e: MouseEvent<HTMLButtonElement>) => {
        setData({
            ...data,
            serverIds: newServerIds
        });
    }

	return (
        <>
            <span>Server ID hinzufügen</span>
            <br />
            <div style={{display: "flex"}}>
                <input type="text" value={idToAdd?.toString()} onChange={onIdToAddChanged} />
                <button onClick={onAddClicked}>Hinzufügen</button>
            </div>
            <table style={{marginTop: "40px"}}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th style={{width: "100px"}}>Aktionen</th>
                    </tr>
                </thead>
                <tbody>
                    {newServerIds.map(newServerId => (
                        <tr key={newServerId}>
                            <td>{newServerId}</td>
                            <td><button onClick={() => onDeleteClicked(newServerId)}>Löschen</button></td>
                        </tr>
                    ))}
                    {newServerIds.length === 0 && (
                        <tr>
                            <td colSpan={2}><i>Keine Einträge gefunden</i></td>
                        </tr>
                    )}
                </tbody>
            </table>
            <button onClick={saveNewServerIds} style={{marginTop: "40px"}}>Speichern</button>
        </>
	);
};
export default ServerSettings;