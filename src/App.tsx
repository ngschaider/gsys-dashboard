import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DataProvider } from "./data/DataContext";

const App = () => {
	return (
		<div className="App">
			<DataProvider>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Dashboard />} />
						<Route path="/settings" element={<Settings />} />
					</Routes>
				</BrowserRouter>
			</DataProvider>
		</div>
	);
};
export default App;