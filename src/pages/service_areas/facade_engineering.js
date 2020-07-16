import React from 'react';
import { Header } from '../../components/Header';
import Footer from '../../components/Footer';
import '../../styles/StyledInfo.scss';

import img from '../../images/serviceAreas/info/facade-engineering_web.jpg';

export default class facade_engineering extends React.Component {
	render()
	{
		return(
			<>
				<Header />
				<section className="main-container">
					<div className="heading-container">
						<div className="random-square"></div>
						<h1>Facade Engineering</h1>
					</div>

					<div className="body">
						<p>
							Your building’s 'skin' needs to be attractive, durable, economical, energy-efficient, and easy to maintain.
						</p>

						<img src={img} alt='' />

						<h2>A holistic approach to a creative solution</h2>
						<p>
							Our expertise in Building Science, Structural Engineering and Structural Glass are brought together to optimize the design of building facades. Our holistic approach includes environmental and energy performance, structural integrity, materials selection, and ease of construction.
						</p>

					</div>
				</section>
				<Footer />
			</>
		);
	}
}