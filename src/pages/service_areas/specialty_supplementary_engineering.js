import React from 'react';
import { Header } from '../../components/Header';
import Footer from '../../components/Footer';
import '../../styles/StyledInfo.scss';

import img from '../../images/serviceAreas/info/specialty-supplementary-engineering_web.jpg';

export default class specialty_supplementary_engineering extends React.Component {
	render()
	{
		return(
			<>
				<Header />
				<section className="main-container">
					<div className="heading-container">
						<div className="random-square"></div>
						<h1>Specialty & Supplementary Engineering</h1>
					</div>

					<div className="body">
						<p>
							We can help with specialized services for a variety of assignments.
						</p>

						<img src={img} alt='' />

						<h2>Leveraging our expertise</h2>
						<p>
							By leveraging our broad base of in-house expertise, we provide contractors and owners with specialty and supplementary engineering services for a diverse range of projects. 
						</p>

						<h3>Examples of recent work:</h3>
						<ul>
							<li>Commissioning of buildings</li>
							<li>Structural design and seismic engineering of support for architectural, mechanical, and electrical building components</li>
							<li>Integrated design services provided for contractors, consultants, and building owners</li>
							<li>Engineering review of structural loading changes on existing buildings</li>
							<li>Preparation of shop drawings for fabrication. </li>
						</ul>

					</div>
				</section>
				<Footer />
			</>
		);
	}
}