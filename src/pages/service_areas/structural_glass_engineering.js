import React from 'react';
import { Header } from '../../components/Header';
import Footer from '../../components/Footer';
import '../../styles/StyledInfo.scss';

import img from '../../images/serviceAreas/info/structural-glass-services_web_new.jpg';

export default class structural_glass_engineering extends React.Component {
	render()
	{
		return(
			<>
				<Header />
				<section className="main-container">
					<div className="heading-container">
						<div className="random-square"></div>
						<h1>Structural Glass Engineering</h1>
					</div>

					<div className="body">
						<p>
							Let your glass stand apart from the rest.
						</p>

						<img src={img} alt='' />

						<h2>Elegant elements and enclosures</h2>
						<p>
							RJC’s glass specialty engineers are leading the industry in advancements to achieve the full potential of glass as a structural material. In addition to collaborating with visionary architects and owners to create unique structural glass elements and enclosures, we also often work directly with specialty glazing contractors. The expertise we have gained through these opportunities has given us unique insight into constructability, ensuring our designs are economical and buildable.<br /><br />

Members of our Structural Glass group have delivered some of the most extraordinary glass structures in North America and internationally.
						</p>

					</div>
				</section>
				<Footer />
			</>
		);
	}
}