import React from 'react';
import { Header } from '../components/Header';
import Footer from '../components/Footer';
import '../styles/StyledInfo.scss';
import img from '../images/info/_structural-engineering_web.jpg';

import SideDrawer from '../components/SideDrawer/SideDrawer';
import Backdrop from '../components/Backdrop/Backdrop';

export default class structuralEngineering extends React.Component {
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
						<h1>Structural Engineering</h1>
					</div>

					<div className="body">
						<p>
							Creating structures we are proud of that make our clients successful is what drives our relentless pursuit of engineering excellence and extraordinary service. Our engineers bring their creativity backed by the resources and collective knowledge of a large, specialized firm to every project.
						</p>

						<img src={img} alt='' />

						<h2>Established structural excellence</h2>
						<p>City skylines across Canada are dominated by buildings bearing RJC’s signature. Over more than 70 years we pioneered innovations to make structures more economical and buildable, developing many approaches which are now common practice.
						</p>

						<h3>Passionate about creating great structures</h3>
						<p>
							We work enthusiastically with visionary architects to create built forms that improve our environment. We confidently extend the boundaries of what is possible in structures, and bring creative ideas and a positive ‘can-do’ attitude to our collaborations.
						</p>

						<h3>Leaders in Structural Engineering</h3>
						<p>
							RJC employs some of Canada’s pre-eminent engineers, many of whom are involved in developing the Codes and Standards used in the construction industry. They provide technical leadership and challenge our staff to push engineering boundaries. This expertise is actively shared throughout the company, and is readily available to our clients.
						</p>
						<h3>Balancing function, economy and sustainability in buildings</h3>
						<p>We collaborate with owner and consultant teams to develop structural solutions that integrate seamlessly into building form and function. Economy and effective use of materials, which are key to sustainability, are in our DNA. When structural elements are exposed and featured, we focus on developing attractive details the whole team can be proud of.</p>
						<h3>Continually improving</h3>
						<p>
							We continually invest in our company to remain one of the top engineering firms in North America, seeking out and mentoring the next generation of Canada’s ‘best and brightest’ engineers.<br /><br />
							We were early adopters of building information modelling (BIM), and our expertise with emerging visualization software enables clients to clearly see ideas we are proposing.<br /><br />
							Projects are becoming more complex, and our practice has evolved to embrace and leverage technology. We are integrating analysis, design and drawing software to optimize results for our clients.
						</p>
					</div>
				</section>
				<Footer />
			</>
		);
	}
}