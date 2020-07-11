import React from 'react';
import '../styles/StyledNavbar.scss';
import { Link } from 'react-router-dom';
import logo from '../images/rjc-logo.png';

export class Navbar extends React.Component {
	render() {

		const ShowWarning = () => {
			alert(`This is only a mockup. I don't have access to the backend so you this page is not available`);
		}

		return(
			<nav className="navbar-navigation">
				<div className="hamburger"></div>

				<div className="navbar-logo">
					<Link to={{ pathname: '/'}}>
						<img src={logo} alt="" />
					</Link>
				</div>
				<div className="navbar-items">
					<ul>
						<li>
							<Link to={{
								pathname: '/practiceAreas'
							}}>
								Services
							</Link>
						</li>

						<li><a href="/">Projects</a></li>
						<li onClick={ShowWarning}><Link to={{pathname: '/'}}>News</Link></li>
						<li><Link to={{pathname: '/'}}>Media</Link></li>
						<li><Link to={{pathname: '/'}}>Careers</Link></li>
						<li><Link to={{pathname: '/'}}>About</Link></li>
					</ul>
				</div>
			</nav>
		);
	}
}