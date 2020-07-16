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
import videos from '../pages/videos';
import privacyPolicy from '../pages/privacyPolicy';

import bridgeDesignRehabilitation from '../pages/service_areas/bridge_design_rehabilitation';
import buildingEnclosures from '../pages/service_areas/build_enclosures';
import steelDesign from '../pages/service_areas/steel_design';
import conditionAssessments from '../pages/service_areas/condition_assessments';
import depreciationReserveFund from '../pages/service_areas/depreciation_reserve_fund';
import facadeEngineering from '../pages/service_areas/facade_engineering';
import fallProtection from '../pages/service_areas/fall_protection';
import forensicEngineering from '../pages/service_areas/forensic_engineering';
import heritageConservation from '../pages/service_areas/heritage_conservation';
import parkingFacilityDesign_serviceAreas from '../pages/service_areas/parking_facility_design';
import parkingStructureRestoration from '../pages/service_areas/parking_structure_restoration';
import pavementRehabilitation from '../pages/service_areas/pavement_rehabilitation';
import performanceAssessment from '../pages/service_areas/performance_assessment';
import postTensionedConcrete from '../pages/service_areas/post_tensioned_concrete';
import primeConsulting from '../pages/service_areas/prime_consulting';
import renderingVisualization from '../pages/service_areas/rendering_interactive_visualization';
import roofsPlazaDecks from '../pages/service_areas/roofs_plaza_decks';
import seismicRiskMitigation from '../pages/service_areas/seismic_risk_mitigation';
import specialtySupplementaryEngineering from '../pages/service_areas/specialty_supplementary_engineering';
import structuralEngineering_serviceAreas from '../pages/service_areas/structural_engineering';
import structuralGlassEngineering_serviceAreas from '../pages/service_areas/structural_glass_engineering';
import structuralRestoration_serviceAreas from '../pages/service_areas/structural_restoration';
import sustainableDesign from '../pages/service_areas/sustainable_design';
import trafficDeckProtectionReplacement from '../pages/service_areas/traffic_deck_protection_replacement';
import waterproofing from '../pages/service_areas/waterproofing';
import woodDesign from '../pages/service_areas/wood_design';

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


			<Route path="/service-areas" render={({ match: { url } }) => (
				<>
					<Route exact path={`${url}`} component={serviceAreas} />
					<Route exact path={`${url}/bridge-design-rehabilitation`} component={bridgeDesignRehabilitation} />
					<Route exact path={`${url}/building-enclosures`} component={buildingEnclosures} />
					<Route exact path={`${url}/steel-design`} component={steelDesign} />
					<Route exact path={`${url}/condition-assessments`} component={conditionAssessments} />
					<Route exact path={`${url}/depreciation-reports`} component={depreciationReserveFund} />
					<Route exact path={`${url}/facade-engineering`} component={facadeEngineering} />
					<Route exact path={`${url}/fall-protection`} component={fallProtection} />
					<Route exact path={`${url}/forensic-engineering`} component={forensicEngineering} />
					<Route exact path={`${url}/heritage-conservation`} component={heritageConservation} />
					<Route exact path={`${url}/parking-facility-designs`} component={parkingFacilityDesign_serviceAreas} />
					<Route exact path={`${url}/parking-structure-restoration`} component={parkingStructureRestoration} />
					<Route exact path={`${url}/pavement-rehabilitation`} component={pavementRehabilitation} />
					<Route exact path={`${url}/performance-assessment`} component={performanceAssessment} />
					<Route exact path={`${url}/post-tensioned-concrete`} component={postTensionedConcrete} />
					<Route exact path={`${url}/prime-consulting`} component={primeConsulting} />
					<Route exact path={`${url}/rendering-interactive-visualization`} component={renderingVisualization} />
					<Route exact path={`${url}/roofs-plaza-decks`} component={roofsPlazaDecks} />
					<Route exact path={`${url}/seismic-risk-mitigation`} component={seismicRiskMitigation} />
					<Route exact path={`${url}/specialty-supplementary-engineering`} component={specialtySupplementaryEngineering} />
					<Route exact path={`${url}/structural-engineering`} component={structuralEngineering_serviceAreas} />
					<Route exact path={`${url}/structural-glass-engineering`} component={structuralGlassEngineering_serviceAreas} />
					<Route exact path={`${url}/structural-restoration`} component={structuralRestoration_serviceAreas} />
					<Route exact path={`${url}/sustainable-design`} component={sustainableDesign} />
					<Route exact path={`${url}/traffic-deck-protection-replacement`} component={trafficDeckProtectionReplacement} />
					<Route exact path={`${url}/waterproofing`} component={waterproofing} />
					<Route exact path={`${url}/wood-design`} component={woodDesign} />
				</>
			)} />



			<Route path="/media" render={({ match: { url }}) => (
				<>	
					<Route exact path={`${url}`} component={media} />
					<Route exact path={`${url}/brochures`} component={brochures} />
					<Route exact path={`${url}/videos`} component={videos} />
				</>
			)}/>
			<Route path="/careers" component={careers} />
			<Route path="/about" render={({ match: { url }}) => (
				<>	
					<Route exact path={`${url}`} component={about} />
					<Route exact path={`${url}/company`} component={aboutCompany} />
				</>
			)}/>
			<Route path="/privacy-policy" component={privacyPolicy} />
		</Switch>
	</BrowserRouter>
);

export default Router;