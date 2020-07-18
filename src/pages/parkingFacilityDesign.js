import React from 'react';
import { Header } from '../components/Header';
import Footer from '../components/Footer';
import '../styles/StyledInfo.scss';
import img from '../images/info/parking-facility-design.jpg';
import SideDrawer from '../components/SideDrawer/SideDrawer';
import Backdrop from '../components/Backdrop/Backdrop';

export default class parkingFacilityDesign extends React.Component {
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
						<h1>Parking Facility Design</h1>
					</div>

					<div className="body">
						<p>
							Leading with creative, integrated parking solutions that focus on security, durability, economy, and user-friendly design.
						</p>

						<img src={img} alt='' />

						<h2>Driven by design </h2>
						<p>Whether you’re seeking a structural engineer, restoration engineer, parking consultant or prime consultant for a parking facility, RJC excels in this area. We are one of the few firms in North America to truly specialize in parking facility design.
						</p>

						<h3>Unparalleled parking solutions</h3>
						<p>
							With over 55 years of experience and more awards for parking design than any other firm in Canada, RJC is the perfect partner for parking projects. We see parking facility design as a specialized field. To undertake this successfully, and to deliver exceptional value to our clients in the parking industry, we believe it is essential to immerse ourselves in the industry to continuously drive it forward.
						</p>

						<h3>Parking planning</h3>
						<p>
							With our extensive knowledge of both functional planning and structural design, we are able to strategically integrate these two important aspects in the design of any parking structure. This integration allows us to minimize the cost per square foot and optimize the cost per car stall. 
						</p>
						<h3>Durability design and corrosion protection </h3>
						<p>A parking structure designed and constructed with a focus on durability will not require the same level of maintenance and repair as one that was not. Our parking experts can demonstrate that a slightly higher initial capital cost will result in reduced operating costs and a lower life-cycle cost for your parking structure.</p>
						
					</div>
				</section>
				<Footer />
			</>
		);
	}
}