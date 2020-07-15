import React from 'react';
import '../styles/StyledPracticeArea.scss';
import Item from './Item';
import { Link } from 'react-router-dom';
import EzSnackbar from './Snackbar';
import img1 from '../images/media/brochures_gradient.jpg'
import img2 from '../images/media/videos_gradient.jpg'
import img3 from '../images/media/industry-publications_gradient.jpg'
import img4 from '../images/media/research.jpg'

class MediaContent extends React.Component {

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
			<section className="main-container">
				<div className="heading-container">
					<div className="random-square"></div>
					<h1>Media</h1>
				</div>

				<div className="item-list">
					{/*Input square components*/}
					<div className="grid-item">
					<Link to={{ pathname: "/media/brochures"}}>
						<Item image={img1} text="Brochures"/>
					</Link>
					</div>
					<div className="grid-item">
						<Link to={{ pathname: "/media/videos"}}>
							<Item image={img2} text="Videos"/>
						</Link>
					</div>
					<div className="grid-item" onClick={this.handleClick}>
						<Link>
							<Item image={img3} text="Published"/>
						</Link>
						<EzSnackbar open={this.state} close={this.handleClose}/>
					</div>
					<div className="grid-item" onClick={this.handleClick}>
						<Link>
							<Item image={img4} text="Research"/>
						</Link>
						<EzSnackbar open={this.state} close={this.handleClose}/>
					</div>
				</div>
			</section>
		);
	}

}

export default MediaContent;