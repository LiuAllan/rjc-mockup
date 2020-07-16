import React from 'react';
import { Header } from '../../components/Header';
import Footer from '../../components/Footer';
import '../../styles/StyledInfo.scss';

import img from '../../images/serviceAreas/info/rendering-and-interactive-visualization_web.jpg';

export default class rendering_interactive_visualization extends React.Component {
	render()
	{
		return(
			<>
				<Header />
				<section className="main-container">
					<div className="heading-container">
						<div className="random-square"></div>
						<h1>Rendering & Interactive Visualization</h1>
					</div>

					<div className="body">
						<p>
							Bringing your project to life through forward-thinking design technology.
						</p>

						<img src={img} alt='' />

						<h2>Rendering reality</h2>
						<p>
							As building complexity increases, the efficacy of a 2-D design approach decreases. Advanced 3-D rendering and interactive visualization enables our clients to vividly see the designs proposed early in the design process. 
						</p>

					</div>
				</section>
				<Footer />
			</>
		);
	}
}