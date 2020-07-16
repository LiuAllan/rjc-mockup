import React from 'react';
import { Header } from '../../components/Header';
import Footer from '../../components/Footer';
import '../../styles/StyledInfo.scss';

import img from '../../images/serviceAreas/info/seismic-risk-mitigation_web.jpg';

export default class seismic_risk_mitigation extends React.Component {
	render()
	{
		return(
			<>
				<Header />
				<section className="main-container">
					<div className="heading-container">
						<div className="random-square"></div>
						<h1>Seismic Risk Mitigation</h1>
					</div>

					<div className="body">
						<p>
							We can reduce your risk through detailed assessments and targeted upgrades – a custom seismic solution. 
						</p>

						<img src={img} alt='' />

						<h2>Risk readiness</h2>
						<p>
							For buildings or structures in parts of Canada that are subject to the threat of earthquakes, RJC can provide a range of engineering services to help mitigate seismic risk.
						</p>
						<h3>
							Building structure upgrades
						</h3>
						<p>We have provided creative solutions to seismically upgrade a wide variety of older buildings in areas of higher seismic risk, meeting the challenges of working within existing buildings.</p>

						<h3>Seismic restraint of building contents</h3>
						<p>In moderate earthquakes, many buildings can survive with minimal damage, but there may be significant costs to remediate poorly restrained building contents. The contents include the operational and functional components (OFC’s), which are important for business continuity or asset protection. RJC can assess your building to identify potential risks to OFC’s and other non-structural building components, and develop a seismic restraint retrofit program.</p>
						<h3>Seismic risk assessment and post-disaster planning</h3>
						<p>In the aftermath of any seismic event, the ability to quickly assess building structures has proven to be a significant challenge, and an obstacle toward restoring normalcy. A post-disaster building assessment manual can provide building specific structural information for building assessment teams to make informed decisions about building structural safety. Assessment of the structure would identify risk areas and provide owners with insight on their building seismic vulnerability.</p>
					</div>
				</section>
				<Footer />
			</>
		);
	}
}