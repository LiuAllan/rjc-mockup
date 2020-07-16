import React from 'react';
import { Header } from '../../components/Header';
import Footer from '../../components/Footer';
import '../../styles/StyledInfo.scss';

import img from '../../images/serviceAreas/info/prime-consulting_web8e85a5391b316d6b9fc9ff00001037d2.jpg';

export default class prime_consulting extends React.Component {
	render()
	{
		return(
			<>
				<Header />
				<section className="main-container">
					<div className="heading-container">
						<div className="random-square"></div>
						<h1>Prime Consulting</h1>
					</div>

					<div className="body">
						<p>
							As your Prime Consultant, our focus is on delivering a project that meets your definition of success.
						</p>

						<img src={img} alt='' />

						<h2>Consulting on the complete contract </h2>
						<p>
							In the role of Prime Consultant, RJC treats the building or structure as if it is our own. We conduct Prime Consulting services on a variety of projects with small to large construction budgets, from small repairs to complete new buildings. In this role, we offer client-focused leadership backed with extensive project experience and a whole-building perspective.<br /><br />

To ensure your project is successfully completed on time and on budget, RJC has developed in-house design and drawing standards, master specifications, contract administration standards and procedures, quality control guidelines, and checklists to use in conjunction with your specific project requirements.
						</p>

					</div>
				</section>
				<Footer />
			</>
		);
	}
}