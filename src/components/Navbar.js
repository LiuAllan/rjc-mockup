import React from 'react';
import '../styles/StyledNavbar.scss';
import logo from '../images/rjc-logo.png';

export const Navbar = () => {
	return(
		<nav className="navbar-navigation">
			<div className="hamburger"></div>
			<div className="navbar-logo"><img src={logo} alt="" /></div>
			<div className="navbar-items">
				<ul>
					<li><a href="/">Services</a></li>
					<li><a href="/">Projects</a></li>
					<li><a href="/">News</a></li>
					<li><a href="/">Media</a></li>
					<li><a href="/">Careers</a></li>
					<li><a href="/">About</a></li>
				</ul>
			</div>
		</nav>
	);
}