import InlineIcon from "@iconify/react";
import React, { useState } from "react";
import YoutubeIcon from "@iconify/icons-cib/youtube";
import DuckDuckGoIcon from "@iconify/icons-cib/duckduckgo";

const Search = () => {
	const [searchInput, setSearchInput] = useState("");

	const onYoutubeClicked = (
		e: React.MouseEvent<HTMLSpanElement, MouseEvent>
	) => {
		window.location.href =
			"https://www.youtube.com/results?search_query=" + searchInput;
	};

	const onDuckDuckGoClicked = (
		e: React.MouseEvent<HTMLSpanElement, MouseEvent>
	) => {
		window.location.href = "https://duckduckgo.com/?q=" + searchInput;
	};

	const onSearchInputChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchInput(e.target.value);
	};

	return (
		<section id="search" style={{ display: "flex", alignItems: "center" }}>
			<input
				name="keywords"
				type="text"
				id="search-input"
				spellCheck={false}
				onChange={onSearchInputChanged}
			/>
			<span onClick={onYoutubeClicked}>
				<InlineIcon
					icon={YoutubeIcon}
					className="icon-button"
					height="20px"
				/>
			</span>
			<span onClick={onDuckDuckGoClicked}>
				<InlineIcon
					icon={DuckDuckGoIcon}
					className="icon-button"
					height="20px"
				/>
			</span>
		</section>
	);
};
export default Search;