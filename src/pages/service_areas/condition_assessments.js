import React from 'react';
import { Header } from '../../components/Header';
import Footer from '../../components/Footer';
import '../../styles/StyledInfo.scss';

import img from '../../images/serviceAreas/info/condition-assessments_web.jpg';

export default class condition_assessments extends React.Component {
	render()
	{
		return(
			<>
				<Header />
				<section className="main-container">
					<div className="heading-container">
						<div className="random-square"></div>
						<h1>Condition Assessments</h1>
					</div>

					<div className="body">
						<p>
							Maintaining your building assets starts with knowing their condition.
						</p>

						<img src={img} alt='' />

						<h2>Focusing on your property’s present condition to ensure its future</h2>
						<p>
							RJC can provide a complete understanding of the condition of your property, allowing for the scheduling and budgeting of anticipated capital expenditures for maintenance, repair and eventual replacement of building components. Our services can help extend a building’s useful life and assist in reducing long-term expenditures.<br /><br />

								Our staff are familiar with all common construction materials and building types in North America, and draw upon the cumulative expertise across RJC to provide accurate assessments and sound advice on repair and retrofit projects.
						</p>

					</div>
				</section>
				<Footer />
			</>
		);
	}
}