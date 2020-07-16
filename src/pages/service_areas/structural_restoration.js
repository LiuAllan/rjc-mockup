import React from 'react';
import { Header } from '../../components/Header';
import Footer from '../../components/Footer';
import '../../styles/StyledInfo.scss';

import img from '../../images/serviceAreas/info/structural-restoration-services_web.jpg';

export default class structural_restoration extends React.Component {
	render()
	{
		return(
			<>
				<Header />
				<section className="main-container">
					<div className="heading-container">
						<div className="random-square"></div>
						<h1>Structural Restoration</h1>
					</div>

					<div className="body">
						<p>
							Your building is a significant investment that requires ongoing maintenance and repair to protect and improve it as an asset.
						</p>

						<img src={img} alt='' />

						<h2>Restoration for resilience</h2>
						<p>
							We know how structures are built and function. We know how they deteriorate and fail, and how to most effectively maintain and repair them for lasting value. For over four decades, clients have trusted us to provide valuable advice and services on evaluating, maintaining and restoring their structures. The knowledge base gained by RJC over those years has equipped our specialists to provide a high-level of reliable advice.<br /><br />

Our collective expertise in Structural Engineering, Building Science, Materials Science and Prime Consulting is brought together in our specialized Structural Restoration group.
						</p>

					</div>
				</section>
				<Footer />
			</>
		);
	}
}