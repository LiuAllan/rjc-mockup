import React from 'react';
import { Header } from '../../components/Header';
import Footer from '../../components/Footer';
import '../../styles/StyledInfo.scss';

import img from '../../images/serviceAreas/info/heritage-conservation_web.jpg';

export default class heritage_conservation extends React.Component {
	render()
	{
		return(
			<>
				<Header />
				<section className="main-container">
					<div className="heading-container">
						<div className="random-square"></div>
						<h1>Heritage Conservation</h1>
					</div>

					<div className="body">
						<p>
							Heritage properties are not only a window into the past; they are part of our country’s character. Conserving your historic structure or building is a means of preserving Canada’s unique history. 
						</p>

						<img src={img} alt='' />

						<h2>Preserving our past</h2>
						<p>
							Our understanding of historic construction practices and how to navigate heritage building legislation, combined with our expertise with building science and structural engineering, enables RJC’s specialists to balance the needs of multiple stakeholders and offer creative, economic, and practical solutions to address your historic building needs.<br /><br />

							We are very familiar with the various materials used in the construction of Canada’s historic structures, and have expertise with the appropriate materials and techniques for proper restoration. We understand how materials age in Canada’s climatic conditions, and how to salvage, conserve, and rehabilitate historic materials. We apply this knowledge to assess the condition of your building, develop cost-effective conservation programs, and preserve the heritage fabric. Our experience includes the restoration of a number of Canada’s oldest and most celebrated buildings.
						</p>

					</div>
				</section>
				<Footer />
			</>
		);
	}
}