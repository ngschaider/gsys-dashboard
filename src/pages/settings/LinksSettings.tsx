import { MouseEvent, useState } from "react";
import { DataContext } from "../../data/DataContext";
import { LinkConfig } from "../../data/DataManager";
import { useForm, useGenericContext } from "../../utils/hooks";

const LinksSettings = () => {
	const {data, setData} = useGenericContext(DataContext);

    const categories = data.linkCategories;
    const [newLinks, setNewLinks] = useState<LinkConfig[]>(data.links);

    const onDeleteClicked = (linkToDelete: LinkConfig) => {
        setNewLinks(newLinks.filter(link => link !== linkToDelete));
    };
    
    const save = (e: MouseEvent<HTMLButtonElement>) => {
        setData({
            ...data,
            links: newLinks,
        });
        alert("Speichern erfolgreich!");
    }

    const {onChange, onSubmit, values} = useForm<LinkConfig>({
        name: "",
        url: "",
        categoryId: data.linkCategories[0]?.id ?? "",
    }, values => {
        if(!values.name || !values.url || !values.categoryId || newLinks.find(link => link.name === values.name)) {
            return;
        }
        setNewLinks([
            ...newLinks,
            values,
        ]);
    });

	return (
        <>
            <span>Lesezeichen hinzufügen</span>
            <br />
            <form onSubmit={onSubmit}>
                <span>Name</span><br />
                <input type="text" name="name" value={values.name} onChange={onChange} />
                <br />
                <br />
                <span>URL</span><br />
                <input type="text" name="url" value={values.url} onChange={onChange} />
                <br />
                <br />
                <span>Kategorie</span><br />
                <select name="categoryId" value={values.categoryId} onChange={onChange}>
                    {categories.map(category => ( 
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                </select>
                <br />
                <br />
                <input type="submit" value="Hinzufügen" /> 
            </form>
            <table style={{marginTop: "40px"}}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>URL</th>
                        <th>Kategorie</th>
                        <th style={{width: "100px"}}>Aktionen</th>
                    </tr>
                </thead>
                <tbody>
                    {newLinks.map(link => (
                        <tr key={link.name}>
                            <td>{link.name}</td>
                            <td>{link.url}</td>
                            <td>{categories.find(cat => cat.id === link.categoryId)?.name || "<i>Nicht gefunden</i>"}</td>
                            <td><button onClick={() => onDeleteClicked(link)}>Löschen</button></td>
                        </tr>
                    ))}
                    {newLinks.length === 0 && (
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
export default LinksSettings;