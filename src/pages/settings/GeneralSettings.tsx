import { ChangeEvent, useRef, useState } from "react";
import { DataContext } from "../../data/DataContext";
import { useGenericContext } from "../../utils/hooks";

const GeneralSettings = () => {
	const {data, setData} = useGenericContext(DataContext);
	const [file, setFile] = useState<File|null>(null);

	const onFileChanged = (ev: ChangeEvent<HTMLInputElement>) => {
		setFile(ev.target.files ? ev.target.files[0] : null);
	};

	const onImportClicked = () => {
		if(!file) {
			return;
		}
		
		const reader = new FileReader();
		reader.readAsText(file, "utf8");
		reader.onload = evt => {
			if(evt.target?.result) {
				const json = evt.target.result as string;
				const newData = JSON.parse(json);
				setData(newData);
			}
        };
	};

	const downloadRef = useRef<HTMLAnchorElement>(null);

	const onExportClicked = () => {
		if(downloadRef.current) {
			downloadRef.current.click();
		}
	};

	return (
		<div>
			<input type="file" onChange={onFileChanged} />
			<button onClick={onImportClicked}>Import</button>

			<a href={"data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data, null, 2))} download="dashboard-data.json" ref={downloadRef} style={{display: "none"}}>&nbsp;</a>
			<button onClick={onExportClicked}>Export</button>
		</div>
	);
};

export default GeneralSettings;