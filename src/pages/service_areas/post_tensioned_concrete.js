import React from 'react';
import { Header } from '../../components/Header';
import Footer from '../../components/Footer';
import '../../styles/StyledInfo.scss';

import img from '../../images/serviceAreas/info/post-tensioned-concrete_web.jpg';

export default class post_tensioned_concrete extends React.Component {
	render()
	{
		return(
			<>
				<Header />
				<section className="main-container">
					<div className="heading-container">
						<div className="random-square"></div>
						<h1>Post-Tensioned Concrete</h1>
					</div>

					<div className="body">
						<p>
							Post-tensioned structures at risk require periodic assessment, preventative maintenance, creative repair, and a practical protection program.
						</p>

						<img src={img} alt='' />

						<h2>Predicting performance</h2>
						<p>
							Since the mid-80’s, when issues with deterioration of post-tensioned structures became evident, RJC has led the development of investigation, maintenance and repair techniques. Through our assessment and monitoring of over 500 structures across North America, we have gained unique insights into predicting the performance of these types of structures. We apply this depth of experience to each of our assignments in designing custom monitoring and remediation strategies.<br /><br />

In partnership with suppliers, manufacturers, and contractors, our work in this area has also contributed to improvements in unbonded post-tensioned reinforcement details, corrosion protection, and quality control for new structures.
						</p>

					</div>
				</section>
				<Footer />
			</>
		);
	}
}