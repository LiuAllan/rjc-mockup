import React from 'react';
import { Header } from '../components/Header';
import Footer from '../components/Footer';
import '../styles/StyledInfo.scss';
import img from '../images/info/_building-science_web.jpg';

export default class buildingScience extends React.Component {
	render()
	{
		return(
			<>
				<Header />
				<section className="main-container">
					<div className="heading-container">
						<div className="random-square"></div>
						<h1>Building Science</h1>
					</div>

					<div className="body">
						<p>
							Providing building enclosures that work inspires us to be leaders in addressing our clients' problems and providing creative solutions. Our team of specialists thrive on the technical challenges of meeting today’s code requirements and helping clients optimize the performance, maintenance and repair of their existing building enclosures.
						</p>

						<img src={img} alt='' />

						<h2>Down to a science</h2>
						<p>Our knowledge base, developed over decades of helping clients address building issues, gives us the expertise needed to look at building envelopes from the earliest conceptual stages of design and to come up with details that perform. Our holistic approach means we understand how building envelopes function and how they integrate with other building components throughout their lifespan.  
						</p>

						<h3>Reliable advice for existing building enclosures </h3>
						<p>
							We have investigated and repaired hundreds of existing building enclosures of all vintages, from heritage masonry to glass curtain wall. Our specialists bring this accrued knowledge to every project. Our services range from investigation of specific localized areas of distress to complete enclosure assessments. As Prime Consultants, we can also assist with the implementation of your repair or rehabilitation work. The scope of our services are tailored to meet the needs and requirements of the project.
						</p>

						<h3>New building enclosure designs for today's needs</h3>
						<p>
							To meet the demanding performance metrics in today’s building codes, the design of building enclosures has become increasingly complex. Our creative staff are proud of their reputation for developing effective, simple, buildable solutions that meet these challenges. We stay at the forefront of evolving building science technology and we know what advanced cladding materials are available. As leaders, we are setting standards for successful implementation of these new materials and techniques. We also stay actively involved in many committees, with several of our specialists serving as board members.
						</p>

					</div>
				</section>
				<Footer />
			</>
		);
	}
}