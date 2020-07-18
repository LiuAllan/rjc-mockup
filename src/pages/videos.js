import React from 'react';
import { Header } from '../components/Header';
import VideoContent from '../components/VideoContent';
import Footer from '../components/Footer';
import SideDrawer from '../components/SideDrawer/SideDrawer';
import Backdrop from '../components/Backdrop/Backdrop';

export default class videos extends React.Component {
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
				<VideoContent />
				<Footer />
			</>
		);
	}
}