import "./Links.css"
import { DataContext } from "../data/DataContext";
import { useGenericContext } from "../utils/hooks";

const Links = () => {
	const { data: {links, linkCategories}} = useGenericContext(DataContext);

	if (links.length === 0) return null;

	return (
		<section className="Links">
			<h3>Links</h3>
			<div className="LinksLoop">
				{linkCategories.map(category => (
					<div className="LinksItem" key={category.id}>
						<h4>{category.name}</h4>
						{links
							.filter(link => link.categoryId === category.id).map(link => (
								<a href={link.url} key={link.name} className="theme_color-border theme_text-select">
									{link.name}
								</a>
							))}
					</div>
				))}
			</div>
		</section>
	);
};
export default Links;