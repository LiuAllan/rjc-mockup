import React from 'react';
import '../styles/StyledFooter.scss';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';

export default class Footer extends React.Component {

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
							<li>Careers</li>
							<li>Privacy Policy</li>
							<li>Accessibility Policy</li>
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