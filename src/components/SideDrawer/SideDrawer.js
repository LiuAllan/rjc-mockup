import React from 'react';
import './StyledSideDrawer.scss';
import { Link } from 'react-router-dom';

const sideDrawer = props => {
	let drawerClasses = ['side-drawer'];
	if(props.show)
	{
		drawerClasses = ['side-drawer open'];
	}
	return(
		<nav className={drawerClasses}>
			<ul>
				<li><Link to={{pathname: '/'}}>Home</Link></li>
				<li><Link to={{pathname: '/practice-areas'}}>Services</Link></li>
				<li><Link to={{pathname: '/'}}>News</Link></li>
				<li><Link to={{pathname: '/media'}}>Media</Link></li>
				<li><Link to={{pathname: '/careers'}}>Careers</Link></li>
				<li><Link to={{pathname: '/about'}}>About</Link></li>
			</ul>
		</nav>
	);
};

export default sideDrawer;