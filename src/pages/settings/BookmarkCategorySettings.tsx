import { MouseEvent, useState } from "react";
import { DataContext } from "../../data/DataContext";
import { BookmarkCategoryConfig } from "../../data/DataManager";
import { useForm, useGenericContext } from "../../utils/hooks";

const BookmarkCategorySettings = () => {
	const {data, setData} = useGenericContext(DataContext);
    const [newBookmarkCategories, setNewBookmarkCategories] = useState<BookmarkCategoryConfig[]>(data.bookmarkCategories);

    const onDeleteClicked = (categoryToDelete: BookmarkCategoryConfig) => {
        setNewBookmarkCategories(newBookmarkCategories.filter(category => category !== categoryToDelete));
    };
    
    const save = (e: MouseEvent<HTMLButtonElement>) => {
        setData({
            ...data,
            bookmarkCategories: newBookmarkCategories,
        });
        alert("Speichern erfolgreich!");
    }

    const {onChange, onSubmit, values} = useForm<BookmarkCategoryConfig>({
        name: "",
        displayName: "",
    }, values => {
        if(!values.name || !values.displayName || newBookmarkCategories.find(category => category.name === values.name)) {
            return;
        }
        setNewBookmarkCategories([
            ...newBookmarkCategories,
            values,
        ]);
    });

	return (
        <>
            <span>Lesezeichen-Kategorie hinzufügen</span>
            <br />
            <form onSubmit={onSubmit}>
                <span>Name</span><br />
                <input type="text" name="id" value={values.name} onChange={onChange} />
                <br />
                <br />
                <span>Anzeigename</span><br />
                <input type="text" name="name" value={values.displayName} onChange={onChange} />
                <br />
                <br />
                <input type="submit" value="Hinzufügen" /> 
            </form>
            <table style={{marginTop: "40px"}}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Anzeigename</th>
                        <th style={{width: "100px"}}>Aktionen</th>
                    </tr>
                </thead>
                <tbody>
                    {newBookmarkCategories.map(category => (
                        <tr key={category.name}>
                            <td>{category.name}</td>
                            <td>{category.displayName}</td>
                            <td><button onClick={() => onDeleteClicked(category)}>Löschen</button></td>
                        </tr>
                    ))}
                    {newBookmarkCategories.length === 0 && (
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
export default BookmarkCategorySettings;