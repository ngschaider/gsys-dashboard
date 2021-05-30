import { getData } from "../data/DataManager";

const Bookmarks = () => {
	const { bookmarkCategories, bookmarks } = getData();

	if (bookmarks.length === 0) return null;

	return (
		<section id="links">
			<h3>Bookmarks</h3>
			<div id="links_loop">
				{bookmarkCategories.map(category => (
					<div id="links_item">
						<h4>{category.name}</h4>
						{bookmarks
							.filter(b => b.categoryId === category.id).map(bookmark => (
								<a href={bookmark.url} className="theme_color-border theme_text-select">
									{bookmark.name}
								</a>
							))}
					</div>
				))}
			</div>
		</section>
	);
};
export default Bookmarks;