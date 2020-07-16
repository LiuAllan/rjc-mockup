import React from 'react';
import { Header } from '../../components/Header';
import Footer from '../../components/Footer';
import '../../styles/StyledInfo.scss';

import img from '../../images/serviceAreas/info/forensic-engineering_web.jpg';

export default class forensic_engineering extends React.Component {
	render()
	{
		return(
			<>
				<Header />
				<section className="main-container">
					<div className="heading-container">
						<div className="random-square"></div>
						<h1>Forensic Engineering</h1>
					</div>

					<div className="body">
						<p>
							When you have a technical problem that needs accurate engineering assessment, we can help.
						</p>

						<img src={img} alt='' />

						<h2>From investigation to resolution</h2>
						<p>
							RJC works with insurance claim adjusters, lawyers and restoration contractors, providing timely advice and solutions to property damage or loss.<br /><br />

							We can guide you through the process of an initial damage assessment. Once a complete understanding of the damage to your building or structure is established, RJC can provide a range of follow-through services such as consulting on demolition, rebuilding, or targeted repair, and providing expert opinions. 
						</p>

					</div>
				</section>
				<Footer />
			</>
		);
	}
}