import React from "react";

import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { DataProvider } from "./data/DataContext";

const App = () => {
	return (
		<div className="App">
			<DataProvider>
				<Router>
					<Switch>
						<Route path="/" exact component={Dashboard} />
						<Route path="/settings" exact component={Settings} />
					</Switch>
				</Router>
			</DataProvider>
		</div>
	);
};
export default App;