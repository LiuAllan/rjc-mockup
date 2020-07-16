import React from 'react';
import { Header } from '../../components/Header';
import Footer from '../../components/Footer';
import '../../styles/StyledInfo.scss';

import img from '../../images/serviceAreas/info/structural-engineering-services_web.jpg';

export default class structural_engineering extends React.Component {
	render()
	{
		return(
			<>
				<Header />
				<section className="main-container">
					<div className="heading-container">
						<div className="random-square"></div>
						<h1>Structural Engineering</h1>
					</div>

					<div className="body">
						<p>
							We integrate creativity and practicality in our designs to optimize results for our clients.
						</p>

						<img src={img} alt='' />

						<h2>Pushing boundaries</h2>
						<p>
							We are leading the practice of Structural Engineering, with many of our innovations commonly used in construction today. Our Structural Engineering services include feasibility studies and design/drafting/field review of virtually all building types, with significant expertise in concrete, structural steel, cold-formed steel, timber, masonry, and glass.
						</p>

					</div>
				</section>
				<Footer />
			</>
		);
	}
}