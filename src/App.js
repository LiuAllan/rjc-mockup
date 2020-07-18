import React from 'react';
import './styles/App.scss';
import { Header } from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

class App extends React.Component {
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
	  return (
	    <div className="App" style={{'height': '100%'}}>
	      <Header drawerToggleClickHandler={this.drawerToggleClickHandler}/>

	      	{ this.state.sideDrawerOpen ? <SideDrawer show={this.state.sideDrawerOpen}/> : null}
			{ this.state.sideDrawerOpen ? <Backdrop click={this.backdropClickHandler}/> : null}

	      <Content />
	      <Footer />
	    </div>
	  );
	}
}

export default App;
