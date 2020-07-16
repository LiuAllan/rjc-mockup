import React from 'react';
import { Header } from '../../components/Header';
import Footer from '../../components/Footer';
import '../../styles/StyledInfo.scss';

import img from '../../images/serviceAreas/info/sustainable-design_overview-page.jpg';

export default class sustainable_design extends React.Component {
	render()
	{
		return(
			<>
				<Header />
				<section className="main-container">
					<div className="heading-container">
						<div className="random-square"></div>
						<h1>Sustainable Design</h1>
					</div>

					<div className="body">
						<p>
							Good design is sustainable design.
						</p>

						<img src={img} alt='' />

						<h2>Committed to environmentally responsive and holistic engineering</h2>
						<p>
							In today’s built environment, being environmentally innovative and responsive is a defining component for how we measure success. Our core values infuse all that we do and our motivation is deeply rooted by our passion and commitment to delivering creative and practical design solutions for our clients, our communities and the environment. RJC is a strong voice for innovative thinking and sustainable leadership and as the importance of sustainability grows, we are leading the charge through research, design, and the full range of services we deliver. Our focus on the economical, social and environmental impacts of our projects, form the basis of how we work with our clients to meet their sustainability goals. 
						</p>

						<h3>Great buildings designed to last</h3>
						<p>Your building can have a place in the future we envision: one where sustainable buildings are the rule, not the exception. As part of our sustainable design process, we carefully consider impacts a building has on its surrounding physical environment, energy sources, performance and resiliency and the impacts on health and well being of its occupants. We also take great care in selecting appropriate resources to minimize the negative ecological impacts of our buildings by augmenting design efficiencies through the use of energy efficient materials. Our in-house Sustainability Framework and its six guiding design strategies–which cross all green “accounting” systems–guide our designs and project team partners.<br /><br />

We also provide durability consulting, including CSA S478 compliance and planning for service life and system renewals. We are members of both the US and Canadian Green Building Councils (USGBC and CaGBC), and are committed to advocacy and education to ensure a future where sustainable buildings are mainstream.</p>

						<h3>We think green</h3>
						<p>RJC’s Sustainable Design Group (SDG) acts as a core for staying abreast of industry techniques and practices that expand RJC’s knowledge of sustainable design on a broad spectrum of understanding, in particular, on how it affects our core practice areas, particularly structural design and Building Science. The SDG establishes best practices in sustainability across our practice areas, and recommends the adoption of these standards firm wide and supports these practices through research. The group helps foster innovation related to sustainable design practices so that RJC is viewed as an industry leader in sustainable design practices.<br /><br />

A culture of “giving back” has been a core value of RJC since our inception, and aligns well with our sustainable vision. As a firm we realize that our impact extends well beyond our projects. With this in mind, RJC actively supports through sponsorships and donations many Canadian Green Building Council (CaGBC) national and local chapter events and programs. The ‘green’ initiatives we implement and the investments we make in our firm, are guided by our core values. At RJC, we strive to conduct ourselves in a manner that consistently reinforces and leverages our values of being responsive, creative and practical.<br /><br />

RJC is on a journey toward greener operations and as we migrate to a reduced environmental footprint, our staff has collaborated to create our Green Operations Plan. It outlines our vision and policies and, as a “living document,” is updated regularly with progress on initiatives and strategies.<br /><br />

We have also established GreenTeams within each of our offices. These teams actively pursue ways to bring our Green Operations Plan vision to life, including cultivating recycling programs, developing sustainable procurement processes, reducing energy use and generating new ideas to reduce our environmental footprint. RJC’s leadership recognizes the importance of providing opportunities for input and feedback, and they actively support and encourage staff to engage with RJC GreenTeams with innovative actions and ideas.<br /><br />

Interested in discussing your next ‘sustainable’ project? Want to learn more about sustainable design and best practices?
Email us at thinkgreen@rjc.ca</p>

					</div>
				</section>
				<Footer />
			</>
		);
	}
}