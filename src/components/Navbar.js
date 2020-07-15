import React from 'react';
import '../styles/StyledNavbar.scss';
import { Link } from 'react-router-dom';
import logo from '../images/rjc-logo.png';
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';
import EzSnackbar from './Snackbar';

export class Navbar extends React.Component {

	state = {
		displayMenu: false,
		open: false,
	}

	showDropdownMenu = (event) => {
		event.preventDefault();
		this.setState({
			displayMenu: true }, () => {document.addEventListener('click', this.hideDropdownMenu);
		});
	}

	hideDropdownMenu = () => {
		this.setState({
			displayMenu: false }, () => {document.removeEventListener('click', this.hideDropdownMenu);
		});
	}

	handleClick = () => {
    	this.setState({ open: true, });
  	}

  	handleClose = (event, reason) => {
	    if (reason === 'clickaway') {
	      return;
	    }
	    this.setState({ open: false, });
  	}


	render() {

		return(
			<nav className="navbar-navigation">
				<div className="hamburger">
					<DrawerToggleButton click={this.props.toggle}/>
				</div>

				<div className="navbar-logo">
					<Link to={{ pathname: '/'}}>
						<img src={logo} alt="" />
					</Link>
				</div>


				<div className="navbar-items" onMouseLeave={this.hideDropdownMenu}>
					<ul className="main-ul">
						<div className="dropdown1">
							<li onMouseOver={this.showDropdownMenu}>
									<Link to={{pathname: '/practice-areas'}}>Services</Link>
							</li>
							
							{ this.state.displayMenu ? (
								<ul className="dropdown-ul1" onMouseLeave={this.hideDropdownMenu}>
									<li><Link to={{pathname: '/practice-areas'}}>Practice Areas</Link></li>
									<li><Link to={{pathname: '/service-areas'}}>Service Areas</Link></li>
								</ul>
							) : null}
						</div>

						{/*<li><Link to={{pathname: '/'}}>Projects</Link></li>*/}
						<div>
							<li onClick={this.handleClick}><Link>News</Link></li>
							<EzSnackbar open={this.state} close={this.handleClose}/>
						</div>
						<li><Link to={{pathname: '/media'}}>Media</Link></li>
						<li><Link to={{pathname: '/careers'}}>Careers</Link></li>
						<li><Link to={{pathname: '/about'}}>About</Link></li>

					</ul>
				</div>
			</nav>
		);
	}
}