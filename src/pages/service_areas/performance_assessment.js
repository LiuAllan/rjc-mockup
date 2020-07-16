import React from 'react';
import { Header } from '../../components/Header';
import Footer from '../../components/Footer';
import '../../styles/StyledInfo.scss';

import img from '../../images/serviceAreas/info/performance-assessment_web.jpg';

export default class performance_assessment extends React.Component {
	render()
	{
		return(
			<>
				<Header />
				<section className="main-container">
					<div className="heading-container">
						<div className="random-square"></div>
						<h1>Performance Assessment</h1>
					</div>

					<div className="body">
						<p>
							A building enclosure’s performance must be measured so that it can be improved. 
						</p>

						<img src={img} alt='' />

						<h2>Striving for optimal performance</h2>
						<p>
							RJC utilizes software suites and field diagnostic tools, such as thermal imaging, leakage testing, and structural tests, to properly understand your building’s unique behaviour. Calibrating our software suites with field diagnostic results allows us to create a computer model of your building’s existing conditions from which the optimal performance level can be achieved.
						</p>

					</div>
				</section>
				<Footer />
			</>
		);
	}
}