import React from 'react';
import '../styles/StyledPracticeArea.scss';
import Item from './Item';
import { Link } from 'react-router-dom';

import img1 from '../images/media/brochures_gradient.jpg'
import img2 from '../images/media/videos_gradient.jpg'
import img3 from '../images/media/industry-publications_gradient.jpg'
import img4 from '../images/media/research.jpg'

class MediaContent extends React.Component {

	render()
	{
		const clickHandler = () => {
			alert('Component not implemented in mockup. Dev has no access to backend.');
		}

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
						<Link to={{ pathname: "/media"}}>
							<Item image={img2} text="Videos"/>
						</Link>
					</div>
					<div className="grid-item" onClick={clickHandler}>
						<Link to={{ pathname: "/media"}}>
							<Item image={img3} text="Published"/>
						</Link>
					</div>
					<div className="grid-item" onClick={clickHandler}>
						<Link to={{ pathname: "/media"}}>
							<Item image={img4} text="Research"/>
						</Link>
					</div>
				</div>
			</section>
		);
	}

}

export default MediaContent;