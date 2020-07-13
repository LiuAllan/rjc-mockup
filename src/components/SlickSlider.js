import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../styles/SlickSlider.scss';

import img1 from '../images/mulgrave-senior-school_structural-engineering.jpg';
import img2 from '../images/great_plains_recreation_facility_building-science.jpg';
import img3 from '../images/eaton-centre-ped-bridge_structural-glassbbdaac391b316d6b9fc9ff00001037d2.jpg';
import img4 from '../images/customs-house_structural-restoration.jpg';
import img5 from '../images/portland-park-village_audits-and-studies.jpg';
import img6 from '../images/mount-royal-university-parkade_parking-facility.jpg';

export default class SlickSlider extends React.Component {
	render()
	{
		const settings = {
			dots: true,
			lazyLoad: true,
			infinite: true,
			speed: 800,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 3000,
			pauseOnHover: true,
			
		};

		const data = {
			info1: {
				h1: "Engineering for all structures",
				h3: "Structural Engineering",
				p: "Mulgrave Senior School West Vancouver, BC",
			},
			info2: {
				h1: "High-performance enclosure expertise",
				h3: "Building Science",
				p: "Great Plains Recreational Facility Calgary, AB",
			},
			info3: {
				h1: "Full-service delivery of extraordinary glass structures",
				h3: "Structural glass and facade Engineering",
				p: "Eaton Centere Pedestrian Bridge Toronto, ON",
			},
			info4: {
				h1: "Restoring existing buildings and facades",
				h3: "Structural Restoration",
				p: "Customs House Victoria, BC",
			},
			info5: {
				h1: "Proactive and preventative approach to maintenance",
				h3: "Audits and Studies",
				p: "Portland Park Village Roof Replacement & Reserve Fund Studies Toronto, ON",
			},
			info6: {
				h1: "Unparalleled parking solutions",
				h3: "Parking Facility Design",
				p: "Mount Royal University Parkade Calgary, AB",
			},
		}


		return(
			<div className="slide-container">
				<Slider {...settings}>
					<div className="slide1">
						<div className="slide1-container">
							<Link to={{pathname: "/practice-areas/structural-engineering"}}>
								<div className="box1">
									<div className="box1-info">
										<div className="random-square"></div>
										<h1>
											{data.info1.h1}
										</h1>
										<h3>{data.info1.h3}</h3>
										<p>{data.info1.p}</p>
									</div>
								</div>
							</Link>
						</div>
						<img src={img1} alt="" />
					</div>
					<div className="slide2">
						<div className="slide2-container">
							<Link to={{ pathname: "/practice-areas/building-science"}}>
								<div className="box2">
									<div className="box2-info">
										<div className="random-square"></div>
										<h1>
											{data.info2.h1}
										</h1>
										<h3>{data.info2.h3}</h3>
										<p>{data.info2.p}</p>
									</div>
								</div>
							</Link>
						</div>
						<img src={img2} alt="" />
					</div>
					<div className="slide3">
						<div className="slide3-container">
							<Link to={{ pathname: 'practice-areas/structural-glass-engineering'}}>
								<div className="box3">
									<div className="box3-info">
										<div className="random-square"></div>
										<h1>
											{data.info3.h1}
										</h1>
										<h3>{data.info3.h3}</h3>
										<p>{data.info3.p}</p>
									</div>
								</div>
							</Link>
						</div>
						<img src={img3} alt="" />
					</div>

					<div className="slide4">
						<div className="slide4-container">
							<Link to={{ pathname: 'practice-areas/structural-restoration'}}>
								<div className="box4">
									<div className="box4-info">
										<div className="random-square"></div>
										<h1>
											{data.info4.h1}
										</h1>
										<h3>{data.info4.h3}</h3>
										<p>{data.info4.p}</p>
									</div>
								</div>
							</Link>
						</div>
						<img src={img4} alt="" />
					</div>
					<div className="slide5">
						<div className="slide5-container">
							<Link to={{ pathname: 'practice-areas/audits-studies'}}>
								<div className="box5">
									<div className="box5-info">
										<div className="random-square"></div>
										<h1>
											{data.info5.h1}
										</h1>
										<h3>{data.info5.h3}</h3>
										<p>{data.info5.p}</p>
									</div>
								</div>
							</Link>
						</div>
						<img src={img5} alt="" />
					</div>
					<div className="slide6">
						<div className="slide6-container">
							<Link to={{ pathname: 'practice-areas/parking-facility-design'}}>
								<div className="box6">
									<div className="box6-info">
										<div className="random-square"></div>
										<h1>
											{data.info6.h1}
										</h1>
										<h3>{data.info6.h3}</h3>
										<p>{data.info6.p}</p>
									</div>
								</div>
							</Link>
						</div>
						<img src={img6} alt="" />
					</div>
				</Slider>
			</div>
		);
	}
}