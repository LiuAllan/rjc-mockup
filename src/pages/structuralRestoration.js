import React from 'react';
import { Header } from '../components/Header';
import Footer from '../components/Footer';
import '../styles/StyledInfo.scss';
import img from '../images/info/_structural-restoration_web.jpg';

import SideDrawer from '../components/SideDrawer/SideDrawer';
import Backdrop from '../components/Backdrop/Backdrop';

export default class structuralRestoration extends React.Component {
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
						<h1>Structural Restoration</h1>
					</div>

					<div className="body">
						<p>
							Helping our clients maintain, protect and improve their buildings and other structures is a passion of ours.
						</p>

						<img src={img} alt='' />

						<h2>Knowledge you can trust</h2>
						<p>
						We know how structures are built and function. We know how they deteriorate and fail, and how to most effectively maintain and repair them for lasting value. For decades, clients have trusted us to provide valuable advice and services on evaluating, maintaining and restoring their structures. The knowledge base gained by RJC over those years has equipped our specialists to provide a high-level of reliable expertise.
						</p>

						<h3>Relationships are key</h3>
						<p>
							Most of our clients are long-term partners, entrusting us with their structures over their service life. Our restoration knowledge has been applied to all common building types, as well as many specialized industrial facilities. When engaged as Prime Consultant, we work closely with clients to deliver optimum results. We know the importance of developing procedures and schedules to minimize disruption during construction. 
						</p>

						<h3>Finding the right fix</h3>
						<p>
							Our collective expertise in structural engineering, building science, materials science and prime consulting is brought together in our specialized Structural Restoration Group. Our creative staff love the challenge of solving the ‘puzzles’ presented by each unique project, and the trusting relationships fostered by working with our clients to find the most effective solutions.
						</p>
						
					</div>
				</section>
				<Footer />
			</>
		);
	}
}