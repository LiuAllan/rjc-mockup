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
				<li><Link to={{pathname: '/practiceAreas'}}>Services</Link></li>
				<li><Link to={{pathname: '/'}}>Projects</Link></li>
				<li><Link to={{pathname: '/'}}>News</Link></li>
				<li><Link to={{pathname: '/'}}>Media</Link></li>
				<li><Link to={{pathname: '/'}}>Careers</Link></li>
				<li><Link to={{pathname: '/'}}>About</Link></li>
			</ul>
		</nav>
	);
};

export default sideDrawer;