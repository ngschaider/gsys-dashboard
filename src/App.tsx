import React from "react";

import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Dashboard} />
				<Route path="/settings" exact component={Settings} />
			</Switch>
		</Router>
	);
};
export default App;