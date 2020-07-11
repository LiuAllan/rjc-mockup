import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from "../App";
import practiceAreas from "../pages/practiceAreas";

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/" component={App} exact /> {/*only renders for this EXACT path only*/}
			<Route path="/practiceAreas" component={practiceAreas} /> {/*takes a route variable*/}
		</Switch>
	</BrowserRouter>
);

export default Router;