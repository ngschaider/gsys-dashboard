import "./Search.css"
import { AiFillYoutube } from "react-icons/ai";
import { SiDuckduckgo } from "react-icons/si";
import React, { KeyboardEvent, useState } from "react";

const Search = () => {
	const [searchInput, setSearchInput] = useState("");

	const sendToYoutube = () => {
		if(searchInput) {
			window.location.href = "https://www.youtube.com/results?search_query=" + searchInput;
		} else {
			window.location.href = "https://www.youtube.com/";
		}
	};

	const sendToDuckDuckGo = () => {
		if(searchInput) {
			window.location.href = "https://duckduckgo.com/?q=" + searchInput;
		} else {
			window.location.href = "https://duckduckgo.com/";
		}	
	};

	const onSearchInputChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchInput(e.target.value);
	};

	const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if(e.altKey) {
			if(e.key === "1") {
				sendToYoutube();
			} else if(e.key === "2") {
				sendToDuckDuckGo();
			}
		}
	};

	return (
		<section className="Search" style={{ display: "flex", alignItems: "center" }} onKeyDown={onKeyDown}>
			<input
				name="keywords"
				type="text"
				spellCheck={false}
				onChange={onSearchInputChanged}
				autoFocus
				className="SearchInput"
			/>
			<span onClick={sendToYoutube}>
				<AiFillYoutube className="icon-button" height="20px" />
			</span>
			<span onClick={sendToDuckDuckGo}>
				<SiDuckduckgo className="icon-button" height="20px" />
			</span>
		</section>
	);
};
export default Search;