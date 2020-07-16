import React from 'react';
import { Header } from '../../components/Header';
import Footer from '../../components/Footer';
import '../../styles/StyledInfo.scss';

import img from '../../images/serviceAreas/info/cold-form-steel-design_web.jpg';

export default class steel_design extends React.Component {
	render()
	{
		return(
			<>
				<Header />
				<section className="main-container">
					<div className="heading-container">
						<div className="random-square"></div>
						<h1>Cold-Formed Steel Design</h1>
					</div>

					<div className="body">
						<p>
							These materials are ideal for mid-rise buildings such as hotels, assisted living or residential care facilities, or residential apartments with regular framing grids.
						</p>

						<img src={img} alt='' />

						<h2>Space for strength </h2>
						<p>
							RJC’s specialists provide full consulting services for cold-formed steel stud and floor systems, and hybrid systems that integrate with other materials. They have a wealth of experience with all the types of systems in typical use across Canada, and can help decide which one is best for your project.
						</p>

					</div>
				</section>
				<Footer />
			</>
		);
	}
}