import React from 'react';
import Button from '@material-ui/core/Button';
import { Header } from '../components/Header';
import Footer from '../components/Footer';
import '../styles/StyledInfo.scss';
import img from '../images/info/careers_new-overview.jpg';
import { Link } from 'react-router-dom';

export default class parkingFacilityDesign extends React.Component {

	render()
	{
		return(
			<>
				<Header />
				<section className="main-container">
					<div className="heading-container">
						<div className="random-square"></div>
						<h1>Careers</h1>
					</div>

					<div className="body">
						<p>
							RJC Engineers is the largest independent employee-owned engineering firm in Canada. We are proud to be recognized as an exceptional workplace, mentoring the next generation of Canada’s ‘best and brightest’ engineers and technologists. Our corporate culture is built around a passion for creative design, collaboration and superior client service. This is a shared philosophy by everyone who works here and is what empowers and inspires our people every single day.
						</p>

						<img src={img} alt='' />

						<h3>It really is about our people</h3>
						<p>At RJC, we invest in our people with ongoing mentorship and providing clear paths to advancing your career. Working under the guidance of leading technical specialists who broadly share their expertise, you will get to fine tune your skills and cultivate your expertise while being given the opportunity to pursue your professional goals.

We believe in fostering creativity by challenging our people everyday to develop innovative solutions to technical challenges. RJC subscribes to the notion that working in teams of highly proficient, driven individuals, motivates others to achieve exceptional results.
						</p>

						<h3>Design your own journey</h3>
						<p>
							At RJC, we invest in our people with ongoing mentorship and providing clear paths to advancing your career. Working under the guidance of leading technical specialists who broadly share their expertise, you will get to fine tune your skills and cultivate your expertise while being given the opportunity to pursue your professional goals.<br /><br />

							We believe in fostering creativity by challenging our people everyday to develop innovative solutions to technical challenges. RJC subscribes to the notion that working in teams of highly proficient, driven individuals, motivates others to achieve exceptional results.
						</p>

						<h3>Why RJC?</h3>
						<p>
							At RJC we know that we are only the sum of our parts. We are always looking for talented, bright and inspired individuals who will bring an energy and passion to our culture.<br /><br />

							We aim towards cultivating a creative and rewarding work environment by recognizing achievements through internal awards, performance bonuses and share ownership.<br /><br />

							We encourage and support a culture of fun and community by supporting various staff social activities, community outreach initiatives and industry collaborations.<br /><br />

							RJC offers its employees a competitive total compensation package including a comprehensive health and dental insurance plan, healthcare spending account, RRSP matching plan, paid vacation and flex-time, tuition reimbursement and much more.<br />

							We are committed to providing our employees with excellent professional and personal benefits which in turn promote wellness and a work-life balance.
						</p>
						<Button 
							target="_blank" 
							href="https://recruiting.ultipro.ca/REA5000RJC/JobBoard/4e6c3563-6fd9-46b3-8409-372fb641b293/?q=&o=postedDateDesc&w=&wc=&we=&wpst=" variant="contained"
						>
							Current Career Opportunities
						</Button>
					</div>
				</section>
				<Footer />
			</>
		);
	}
}