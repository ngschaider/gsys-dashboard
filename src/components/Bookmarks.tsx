import "./Bookmarks.css"
import { DataContext } from "../data/DataContext";
import { useGenericContext } from "../utils/hooks";

const Links = () => {
	const {data: {bookmarks, bookmarkCategories}} = useGenericContext(DataContext);

	if (bookmarks.length === 0) return null;

	return (
		<section className="Links">
			<h3>Links</h3>
			<div className="LinksLoop">
				{bookmarkCategories.map((category, index) => (
					<div className="LinksItem" key={index}>
						<h4>{category.name}</h4>
						{bookmarks.filter(bookmark => bookmark.categoryName === category.name).map(bookmark => (
							<a href={bookmark.url} key={bookmark.name} className="theme_color-border theme_text-select">
								{bookmark.name}
							</a>
						))}
					</div>
				))}
			</div>
		</section>
	);
};
export default Links;