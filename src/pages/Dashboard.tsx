import Header from "../components/Header";
import Applications from "../components/Apps";
import Bookmarks from "../components/Bookmarks";
import SettingsButton from "../components/SettingsButton";
import Search from "../components/Search";
import Servers from "../components/Servers";

const Dashboard = () => {
	return (
		<>
			<SettingsButton />

			<main id="container" className="fade">
				<Search />

				<Header />

				<Applications />

				<Servers />

				<Bookmarks />
			</main>
		</>
	);
};
export default Dashboard;