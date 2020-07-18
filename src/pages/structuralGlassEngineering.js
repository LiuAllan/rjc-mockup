import React from 'react';
import { Header } from '../components/Header';
import Footer from '../components/Footer';
import '../styles/StyledInfo.scss';
import img from '../images/info/_structural-glass-and-facade-engineering_web.jpg';

import SideDrawer from '../components/SideDrawer/SideDrawer';
import Backdrop from '../components/Backdrop/Backdrop';

export default class structuralGlassEngineering extends React.Component {
	state = {
		sideDrawerOpen: false,
	};

	drawerToggleClickHandler = () => {
		this.setState((prevState) => {
			return {sideDrawerOpen: !prevState.sideDrawerOpen};
		});
	};

	backdropClickHandler = () => {
		this.setState({sideDrawerOpen: false});
	};		
	render()
	{
		return(
			<>
				<Header drawerToggleClickHandler={this.drawerToggleClickHandler} />
				{ this.state.sideDrawerOpen ? <SideDrawer show={this.state.sideDrawerOpen}/> : null}
				{ this.state.sideDrawerOpen ? <Backdrop click={this.backdropClickHandler}/> : null}					
				<section className="main-container">
					<div className="heading-container">
						<div className="random-square"></div>
						<h1>Structural Glass Engineering</h1>
					</div>

					<div className="body">
						<p>
							Our structural glass engineering specialists are creating extraordinary landmarks across North America.
						</p>

						<img src={img} alt='' />

						<h2>Bringing your vision to life</h2>
						<p>
						Whether your vision is a glass walkway or stairway, stunning entrance or skylight, or even a glass box cantilevered off the side of a high-rise building, RJC’s structural glass and façade team can bring your vision to reality. We have the expertise to design all façade components, resulting in an elegant system that works and behaves holistically.
						</p>

						<h3>Pushing the boundaries of structural glass</h3>
						<p>
							RJC’s glass specialty engineers are leading the industry in advancements to achieve the full potential of glass as a structural material. In addition to collaborating with visionary architects and owners to create unique structural glass elements and enclosures, we also often work directly with specialty glazing contractors. The expertise we have gained through these opportunities has given us unique insight into constructability, ensuring our conceptual designs are economical and buildable. 
						</p>

						<h3>Challenging façades made possible</h3>
						<p>
							Our specialists are proud of the many outstanding façades they have made possible by bringing together our structural, building science and glass expertise. We know how these aspects need to fit and work together to create an enduring solution at a reasonable cost.
						</p>
						
					</div>
				</section>
				<Footer />
			</>
		);
	}
}