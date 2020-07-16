import React from 'react';
import { Header } from '../../components/Header';
import Footer from '../../components/Footer';
import '../../styles/StyledInfo.scss';

import img from '../../images/serviceAreas/info/building-envelope_web.jpg';

export default class building_enclosures extends React.Component {
	render()
	{
		return(
			<>
				<Header />
				<section className="main-container">
					<div className="heading-container">
						<div className="random-square"></div>
						<h1>Building Enclosures</h1>
					</div>

					<div className="body">
						<p>
							Our team of specialists thrives on the technical challenges of meeting today’s code requirements and helping clients optimize the performance, maintenance and repair of their new and existing building enclosures.
						</p>

						<img src={img} alt='' />

						<h2>Keeping the inside in and the outside out </h2>
						<p>
							To meet the demanding performance metrics in today’s building codes, the design of building enclosures has become increasingly complex. We stay at the forefront of evolving building science technology and  advanced cladding materials. Our services range from the design of envelopes for new buildings to the assessment and rehabilitation of existing building enclosures. For rehabilitation work, we can also provide complete Prime Consulting services.
						</p>

					</div>
				</section>
				<Footer />
			</>
		);
	}
}