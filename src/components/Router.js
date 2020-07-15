import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from "../App";
import ScrollToTop from '../components/ScrollToTop';

import practiceAreas from "../pages/practiceAreas";
import serviceAreas from "../pages/serviceAreas";
import structuralEngineering from "../pages/structuralEngineering";
import buildingScience from "../pages/buildingScience";
import structuralRestoration from "../pages/structuralRestoration";
import structuralGlassEngineering from "../pages/structuralGlassEngineering";
import parkingFacilityDesign from "../pages/parkingFacilityDesign";
import auditsStudies from '../pages/auditsStudies';
import careers from '../pages/careers';
import about from '../pages/about';
import aboutCompany from '../pages/aboutCompany';
import media from '../pages/media';
import brochures from '../pages/brochures';

const Router = () => (
	<BrowserRouter>
		<ScrollToTop />
		<Switch>
			<Route path="/" component={App} exact /> {/*only renders for this EXACT path only*/}
			<Route path="/practice-areas" render={({ match: { url } }) => (
				<>
					<Route exact path={`${url}`} component={practiceAreas} />
					<Route exact path={`${url}/structural-engineering`} component={structuralEngineering} />
					<Route exact path={`${url}/building-science`} component={buildingScience} />
					<Route exact path={`${url}/structural-restoration`} component={structuralRestoration} />
					<Route exact path={`${url}/structural-glass-engineering`} component={structuralGlassEngineering} />
					<Route exact path={`${url}/parking-facility-design`} component={parkingFacilityDesign} />
					<Route exact path={`${url}/audits-studies`} component={auditsStudies} />
				</>
			)} />
			<Route path="/service-areas" component={serviceAreas} />


			<Route path="/media" render={({ match: { url }}) => (
				<>	
					<Route exact path={`${url}`} component={media} />
					<Route exact path={`${url}/brochures`} component={brochures} />
				</>
			)}/>


			<Route path="/careers" component={careers} />
			<Route path="/about" render={({ match: { url }}) => (
				<>	
					<Route exact path={`${url}`} component={about} />
					<Route exact path={`${url}/company`} component={aboutCompany} />
				</>
			)}/>
		</Switch>
	</BrowserRouter>
);

export default Router;