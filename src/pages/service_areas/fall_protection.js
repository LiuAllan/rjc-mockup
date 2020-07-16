import React from 'react';
import { Header } from '../../components/Header';
import Footer from '../../components/Footer';
import '../../styles/StyledInfo.scss';

import img from '../../images/serviceAreas/info/fall-protection-and-travel-restraint_web.jpg';

export default class fall_protection extends React.Component {
	render()
	{
		return(
			<>
				<Header />
				<section className="main-container">
					<div className="heading-container">
						<div className="random-square"></div>
						<h1>Fall Protection & Travel Restraint</h1>
					</div>

					<div className="body">
						<p>
							Safety is paramount for people working on or around your building.
						</p>

						<img src={img} alt='' />

						<h2>Harnessing experience </h2>
						<p>
							RJC provides full fall protection engineering services, including optimizing the layout of the system, detailed design of components, field review of new systems and annual compliance reviews. Our specialists are familiar with all common building types and construction materials, and have developed cost-effective systems to meet a wide variety of fall-arrest challenges.
						</p>

					</div>
				</section>
				<Footer />
			</>
		);
	}
}