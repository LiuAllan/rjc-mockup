import React from 'react';
import { Header } from '../../components/Header';
import Footer from '../../components/Footer';
import '../../styles/StyledInfo.scss';

import img from '../../images/serviceAreas/info/depreciation-reports_web.jpg';

export default class depreciation_reserve_fund extends React.Component {
	render()
	{
		return(
			<>
				<Header />
				<section className="main-container">
					<div className="heading-container">
						<div className="random-square"></div>
						<h1>Depreciation Reports & Reserve Fund Studies</h1>
					</div>

					<div className="body">
						<p>
							Planning for the maintenance and replacement of your building’s components reduces future surprises.
						</p>

						<img src={img} alt='' />

						<h2>Plan your work, work your plan </h2>
						<p>
							Building materials have life expectancies that can be as short as two years or can exceed 50 years. RJC's Depreciation Reports and Reserve Fund Studies assist with strategic planning approaches towards building maintenance and renewals, so that the future costs associated with these necessary activities can be budgeted for, proactively, without undue financial impact to the owners.
						</p>

					</div>
				</section>
				<Footer />
			</>
		);
	}
}