import React from 'react';
import { Header } from '../../components/Header';
import Footer from '../../components/Footer';
import '../../styles/StyledInfo.scss';

import img from '../../images/serviceAreas/info/pavement-rehabilitation_web.jpg';

export default class pavement_rehabilitation extends React.Component {
	render()
	{
		return(
			<>
				<Header />
				<section className="main-container">
					<div className="heading-container">
						<div className="random-square"></div>
						<h1>Pavement Rehabilitation</h1>
					</div>

					<div className="body">
						<p>
							Extending your pavement life involves a feasible design, a quality construction program and a well-timed maintenance plan.
						</p>

						<img src={img} alt='' />

						<h2>The way to a prolonged service life</h2>
						<p>
							RJC understands the route to a practical pavement rehabilitation is an effective method of assessment, preventive maintenance and a rehabilitation design that extends its service life.  Whether the project is a localized repair, overlay, or reconstruction, our specialists are well versed in the materials and methods involved.
						</p>

					</div>
				</section>
				<Footer />
			</>
		);
	}
}