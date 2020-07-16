import React from 'react';
import { Header } from '../../components/Header';
import Footer from '../../components/Footer';
import '../../styles/StyledInfo.scss';

import img from '../../images/serviceAreas/info/designing-with-wood_content-page.jpg';

export default class wood_design extends React.Component {
	render()
	{
		return(
			<>
				<Header />
				<section className="main-container">
					<div className="heading-container">
						<div className="random-square"></div>
						<h1>Wood Design</h1>
					</div>

					<div className="body">
						<p>
							Wood is a sustainable building material – renewable and with low embodied energy. When incorporated thoughtfully and creatively into design, this natural material has been key to creating many of the most inspiring spaces in the built environment.
						</p>

						<img src={img} alt='' />

						<h2>Leading Edge Expertise</h2>
						<p>
							RJC is proud of our long history of pursuing innovative uses of building materials. Our expertise in wood has placed us at the forefront in advancing wood design practices and code development across Canada. Today, RJC has dedicated wood specialists in offices all across Canada. This enables us to provide local expertise backed by industry leaders with specialized knowledge in all aspects of wood design. We have the creativity and technical excellence in our teams to produce attractive connection designs and achieve challenging architectural visions.<br /><br />

We are passionate about bringing our client’s vision to reality through creative structural solutions, while treading softly on the environment. RJC’s culture encourages our specialists to engage in research, code development and outreach with the design and construction industry.<br /><br />

We are currently active with the following organizations shaping the future of wood in Canada: 
						</p>
						<ul>
							<li>Canada’s Wood Code</li>
							<li>NEWBuildS</li>
							<li>FPInnovations</li>
							<li>Canadian Wood Council</li>
							<li>National Building Code of Canada</li>
							<li>BC Advisory Group on Wood-Based Advanced Building Solutions</li>
						</ul>

					</div>
				</section>
				<Footer />
			</>
		);
	}
}