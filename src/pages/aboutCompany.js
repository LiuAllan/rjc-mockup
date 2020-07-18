import React from 'react';
import LazyLoad from 'react-lazyload';
import { Header } from '../components/Header';
import Footer from '../components/Footer';
import { withRouter } from 'react-router';
import '../styles/StyledInfo.scss';
import LocationsGrid from '../components/LocationsGrid';
import img1 from '../images/aboutContent/about-info-img1.jpg'
import img2 from '../images/aboutContent/about-info-img2.jpg'
import img3 from '../images/aboutContent/about-info-img3.jpg'
import EmailIcon from '@material-ui/icons/Email';

import SideDrawer from '../components/SideDrawer/SideDrawer';
import Backdrop from '../components/Backdrop/Backdrop';

class aboutCompany extends React.Component {
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
					<LazyLoad once offset={100}>
						<div className="heading-container">
							<div className="random-square"></div>
							<h1>Company</h1>
						</div>

						<div className="body">
							<div>
								<p>
									Specializing in structural engineering, building science, structural restoration, structural glass and façade engineering and parking facility design and restoration, RJC Engineers is one of North America's leading engineering firms. With a staff of more than 600 in 12 locations across the country, we offer highly personalized service at the local level with the expertise, depth and resources of a large, national firm.
								</p>
								<img src={img1} alt='' />

								<h2>Creative Thinking Practical Results</h2>
								<p>For over seven decades, clients have trusted us to effectively integrate creativity and practicality to help make their projects successful. We bring a positive mindset and collaborative attitude, combined with technical excellence and a commitment to exceptional client service, to all our assignments. <br /><br />

									Our staff includes a number of Canada’s pre-eminent engineers, who challenge our people to push technical boundaries and provide leadership in our fields of practice. We continually invest in our company to remain a leader in our profession, and to mentor the next generation of Canada’s ‘best and brightest’ engineers. <br /><br />

									We are passionate about what we do; what’s best for our client is always at the forefront of our thinking. We succeed when our clients succeed.
								</p>
							</div>
						</div>
					</LazyLoad>

					<LazyLoad once offset={100}>
						<div className="heading-container">
							<div id='history' className="random-square"></div>
							<h1>History</h1>
						</div>

						<div className="body">
							<div>
								<p>
									Our promise of “Creative Thinking Practical Results” was the underlying philosophy of our founders: John Read, Peter Jones, and Per Christoffersen. This philosophy has guided us throughout our history, and is one constant that will never be obsolete in our quickly-changing industry.
								</p>

								<img src={img2} alt='' />

								<h2>From our founders to new generations</h2>
								<p>A lot has changed in our more than 70 years: slide rules and drafting tables have been replaced by computers, and John Read’s original cramped, sublet office in Vancouver has become twelve offices across the country. We’ve experienced booms, busts, celebrations and farewells. Despite all the change, our employee-owned organization has evolved with its unique culture intact. 
								</p>

								<h3>
									Visionary people setting new standards
								</h3>
								<p>
									For generations, we have nurtured people to become national and international leaders in our practice areas. Our staff are active members of local, national, and international code committees and industry associations. The result is a legacy of pushing our practice forward and in new directions with a staff that includes some of the best and brightest engineers and leading technical experts in Canada.
								</p>

								<h3>
									Our evolving practice
								</h3>
								<p>
									Our services have expanded and evolved over the years from our structural engineering origins to suit our clients’ changing needs. Our practice has grown from the structural design of buildings to the design of a variety of other structures; restoring those structures; building envelope design, maintenance and repair; structural glass and facade engineering; parking facility design; prime consulting and project management. As the needs of our clients evolve so will our practice.
								</p>

							</div>
						</div>
					</LazyLoad>

					<LazyLoad once offset={100}>
						<div className="heading-container">
							<div id='people' className="random-square"></div>
							<h1>Our People</h1>
						</div>

						<div className="body">
							<img src={img3} alt='' />
							<p>
								RJC’s dedicated staff members across Canada are passionate about what they do, and take pride in exceeding client expectations. Our senior leaders have hands-on involvement in all projects, creatively collaborating with other team members to provide optimal solutions. When our clients succeed, we succeed.
							</p>
						</div>
					</LazyLoad>

					<LazyLoad once offset={100}>
						<div className="heading-container">
							<div id='locations' className="random-square"></div>
							<h1>Contact</h1>
						</div>

						<p>
							General Inquiries: <EmailIcon fontSize='small'/>info@rjc.ca
						</p>
						<p>
							Media Inquiries: <EmailIcon fontSize='small'/>media@rjc.ca
						</p>
					</LazyLoad>

					<LazyLoad once offset={100}>
						<div className="heading-container">
							<h1>Locations</h1>
						</div>
						<LocationsGrid />
					</LazyLoad>
				</section>
				<Footer />
			</>
		);
	}
}

export default withRouter(aboutCompany);