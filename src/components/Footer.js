import React from 'react';
import '../styles/StyledFooter.scss';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';

export default class Footer extends React.Component {
	state = {
		open: false,
	}

	handleClick = () => {
    	this.setState({ open: true, });
  	}

  	handleClose = (event, reason) => {
	    this.setState({ open: false, });
  	}


	render()
	{
		return(
			<section className="footer-container">
				<Grid container direction='column' justify='space-evenly' alignItems='center'>
					<div className="heading-container">
						<h3>RJC Engineers</h3>
					</div>

					<div className="socials">
					<IconButton aria-label="Twitter.com" onClick={() => window.open('https://twitter.com/RJC_Engineers')}>
						<TwitterIcon style={{ 'color': '#00acee'}} fontSize='large' />
					</IconButton>

					<IconButton aria-label="Twitter.com" onClick={() => window.open('https://www.linkedin.com/company/read-jones-christoffersen-ltd-/')}>
						<LinkedInIcon style={{ 'color': '#00acee'}} fontSize='large' />
					</IconButton>
					<IconButton aria-label="Twitter.com" onClick={() => window.open('https://www.facebook.com/Read-Jones-Christoffersen-Ltd-166038496790920/')}>
						<FacebookIcon style={{ 'color': '#00acee'}} fontSize='large' />
					</IconButton>

					</div>

					<div className="foot-links">
						<ul>
							<Link to={{ pathname: '/careers'}}>
								<li>Careers</li>
							</Link>

							<Link to={{ pathname: '/privacy-policy'}}>
								<li>Privacy Policy</li>
							</Link>

							<a href='http://www.rjc.ca/docs/default-source/accessibility/rjc_accessible-customer-service-policyb8c2ac391b316d6b9fc9ff00001037d2.pdf?sfvrsn=2'>
								<li>Accessibility Policy</li>
							</a>
							<li>Site Map</li>
							<li>Webmail Log-in</li>
						</ul>
					</div>

					<Grid item md={6}>
						<div className="copyrights">
							<p>© Fake Copyright Text 2020 Created by Allan Liu</p>
							<p>No rights reserved. I redesigned the site for fun.</p>
						</div>
					</Grid>
				</Grid>
			</section>
		);
	}
}