import { MouseEvent, useState } from "react";
import { DataContext } from "../../data/DataContext";
import { LinkCategory } from "../../data/DataManager";
import { useForm, useGenericContext } from "../../utils/hooks";

const LinkCategoriesSettings = () => {
	const {data, setData} = useGenericContext(DataContext);
    const [newCategories, setNewCategories] = useState<LinkCategory[]>(data.linkCategories);

    const onDeleteClicked = (categoryToDelete: LinkCategory) => {
        setNewCategories(newCategories.filter(category => category !== categoryToDelete));
    };
    
    const save = (e: MouseEvent<HTMLButtonElement>) => {
        setData({
            ...data,
            linkCategories: newCategories,
        });
        alert("Speichern erfolgreich!");
    }

    const {onChange, onSubmit, values} = useForm<LinkCategory>({
        id: "",
        name: "",
    }, values => {
        if(!values.id || !values.name || newCategories.find(category => category.id === values.id)) {
            return;
        }
        setNewCategories([
            ...newCategories,
            values,
        ]);
    });

	return (
        <>
            <span>Lesezeichen-Kategorie hinzufügen</span>
            <br />
            <form onSubmit={onSubmit}>
                <span>ID</span><br />
                <input type="text" name="id" value={values.id} onChange={onChange} />
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
                    {newCategories.map(category => (
                        <tr key={category.id}>
                            <td>{category.id}</td>
                            <td>{category.name}</td>
                            <td><button onClick={() => onDeleteClicked(category)}>Löschen</button></td>
                        </tr>
                    ))}
                    {newCategories.length === 0 && (
                        <tr>
                            <td colSpan={4}><i>Keine Einträge gefunden</i></td>
                        </tr>
                    )}
                </tbody>
            </table>
            <button onClick={save} style={{marginTop: "40px"}}>Speichern</button>
        </>
	);
};
export default LinkCategoriesSettings;