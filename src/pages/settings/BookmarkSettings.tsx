import { MouseEvent, useState } from "react";
import { DataContext } from "../../data/DataContext";
import { BookmarkConfig } from "../../data/DataManager";
import { useForm, useGenericContext } from "../../utils/hooks";

const BookmarkSettings = () => {
	const {data, setData} = useGenericContext(DataContext);
    const [newBookmarks, setNewBookmarks] = useState<BookmarkConfig[]>(data.bookmarks);

    const onDeleteClicked = (linkToDelete: BookmarkConfig) => {
        setNewBookmarks(newBookmarks.filter(link => link !== linkToDelete));
    };
    
    const save = (e: MouseEvent<HTMLButtonElement>) => {
        setData({
            ...data,
            bookmarks: newBookmarks,
        });
        alert("Speichern erfolgreich!");
    }

    const {onChange, onSubmit, values} = useForm<BookmarkConfig>({
        name: "",
        url: "",
        categoryName: data.bookmarkCategories[0]?.name ?? "",
    }, values => {
        if(!values.name || !values.url || !values.categoryName || newBookmarks.find(link => link.name === values.name)) {
            return;
        }
        setNewBookmarks([
            ...newBookmarks,
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
                <select name="categoryName" value={values.categoryName} onChange={onChange}>
                    {data.bookmarkCategories.map(category => ( 
                        <option key={category.name} value={category.name}>{category.displayName}</option>
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
                    {newBookmarks.map(bookmark => (
                        <tr key={bookmark.name}>
                            <td>{bookmark.name}</td>
                            <td>{bookmark.url}</td>
                            <td>{data.bookmarkCategories.find(bookmarkCategory => bookmarkCategory.name === bookmark.categoryName)?.name || "<i>Nicht gefunden</i>"}</td>
                            <td><button onClick={() => onDeleteClicked(bookmark)}>Löschen</button></td>
                        </tr>
                    ))}
                    {newBookmarks.length === 0 && (
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
export default BookmarkSettings;