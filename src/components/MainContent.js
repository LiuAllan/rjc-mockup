import React from 'react';
import '../styles/StyledMainContent.scss';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ScrollOut from 'scroll-out';
import { Link } from 'react-router-dom';
// import 'animate.css';

import img1 from '../images/main/tor_102910_n10_medium.jpg';
import img2 from '../images/main/edm_031733_n309_medium-(1).jpg';
import img3 from '../images/main/cal_100183_n33_medium-(1).jpg';
import img4 from '../images/main/van_100174_n166_medium.jpg';
import img5 from '../images/main/sustainable-design_overview-page.jpg';

const style = {
	border: '1px solid #00acee',
	color: '#00acee',
}


export default class MainContent extends React.Component {
	componentDidMount() {
		ScrollOut({
			// onShown(el) {
			//     el.classList.add("animated");
			// },
			once: true,
			threshold: 0.4,
		});
	}


	render() {
		return (
			<div className="main-content-container">
				<section className="content-block1">
					<div className="content-block1-info-container">
						<h1>Creative Thinking <b className="enhance">Practical Results</b></h1>
						<p>For over seven decades, we have integrated innovative thinking, technical expertise and practicality to create success for our clients. RJC’s people are Canada’s pre-eminent engineers; we continually invest in our company to retain our status as a leader in our sector and we consistently mentor the next generation of Canada’s ‘best and brightest’ engineers.</p>

						<p>This philosophy has guided us in the decades since and is a constant in the results we deliver in an industry that is ever changing.</p>

						<p>
							Specializing in structural engineering services, building science, structural restoration, structural glass and façade engineering and parking facility design and restoration, RJC Engineers is one of North America's leading engineering firms. We provide highly personalized service at the local level with the expertise, depth and resources of a large, national firm with locations across Canada.
						</p>
					</div>
				</section>

				<section className="content-block2" data-scroll>
					<div className="content-block2-info-container">

						<Grid container spacing={8}>
							<Grid item xs={6}>
								<h3>Leaders in Structural Engineering</h3>
								<p>City skylines across Canada are dominated by buildings bearing RJC’s signature. We have pioneered innovations to make structures more economical and buildable, developing many approaches which are now industry standards. We relentlessly pursue engineering excellence and extraordinary service with the goal of making our clients successful. Our engineers bring their creativity and individual expertise backed by the resources and collective knowledge of a large, specialized firm to every project.</p>

								<Button component={ Link } to="/practice-areas/structural-engineering" variant="outlined" size="small" color="primary" style={style}>
									Learn More
								</Button>
							</Grid>

							<Grid item xs={6}>
								<div className="img-stack">
									<div className="top">
										<img className="img1" src={img1} alt=""/>
									</div>
									<div className="bottom">
										<div className="square"></div>
									</div>
								</div>
							</Grid>
						</Grid>
					</div>
				</section>

				<section className="content-block3" data-scroll>
					<div className="content-block3-info-container">
						<Grid container space={8}>
							<Grid item xs={12}>
								<h3>Leaders in Building Science</h3>
								<p>Our knowledge base has developed over decades of helping our clients address building enclosure issues. We have the engineering expertise needed to look at building envelopes from the earliest conceptual stages of design and to come up with practical details that perform. Our holistic approach means we understand how building envelopes function and how they integrate with other building components throughout their lifespan.</p>
								<Button component={ Link } to="/practice-areas/building-science" variant="outlined" size="small" color="primary" style={style}>Learn More</Button>
							</Grid>

							<Grid item xs={6}>
									<div className="img2-container">
										<img src={img2} alt="" style={{'float':'left'}} />
									</div>
							</Grid>

							<Grid item xs={6}>
								<div className="img3-container">
									<img src={img3} alt="" style={{'float':'right'}}/>
								</div>
							</Grid>

						</Grid>
					</div>
				</section>

				<section className="content-block4" data-scroll>
					<div className="content-block4-info-container">
					<Grid container space={8}>
						<Grid item xs={6}>
							<img src={img4} alt="" />
							
						</Grid>

						<Grid item xs={6}>
							<h3>Leaders in Structural Restoration</h3>
							<p>At RJC we understand how structures are built and function. We know how they deteriorate and fail, and how to most effectively maintain and repair them for lasting value. For decades, clients have trusted us to provide valuable advice and services on evaluating, maintaining and restoring their structures including heritage building restoration. Our engineering knowledge base equips our specialists with a high-level of reliable expertise.</p>
							<Button component={ Link } to="/practice-areas/structural-restoration" variant="outlined" size="small" color="primary" style={style}>Learn More</Button>
						</Grid>
					</Grid>
					</div>
				</section>

				<div 
					className="parallax"
					style={{
						'height': '50vh',
						'width':'100%',
						'backgroundImage': `url(${img5})`,
						'backgroundAttachment':'fixed',
						'backgroundPosition': 'center',
						'backgroundRepeat':'no-repeat',
						'backgroundSize':'cover',
					}}

					></div>

				<section className="content-block5" data-scroll>
					<div className="content-block5-info-container">
						<h3>Leaders in Sustainability</h3>
						<p>RJC is committed to delivering creative, practical solutions benefitting our clients, while also minimizing the economic, social and environmental impacts of the built environment. To establish RJC as an industry leader in this vital area, we have formed RJC’s Sustainable Design Group, which expands our knowledge of sustainable design and helps foster innovation in sustainable design practices. RJC is on a journey toward greener operations and as we migrate to a reduced environmental footprint, our staff has collaborated to create our Green Operations Plan; we have also established GreenTeams within each of our offices to pursue ways to bring our Green Operations Plan vision to life.</p>
						<Button component={ Link } to="/" variant="outlined" size="small" color="primary" style={style}>Learn More</Button>
					</div>
					
				</section>
			</div>
		);
	}

}