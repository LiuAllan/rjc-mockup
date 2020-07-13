import React from 'react';
import { Header } from '../components/Header';
import Footer from '../components/Footer';
import '../styles/StyledInfo.scss';
import img from '../images/info/_structural-engineering_web.jpg';

export default class auditStudies extends React.Component {
	render()
	{
		return(
			<>
				<Header />
				<section className="main-container">
					<div className="heading-container">
						<div className="random-square"></div>
						<h1>Audit and Studies</h1>
					</div>

					<div className="body">
						<p>
							The economic, environmental, and social costs of repairs to your building can be minimized by planning maintenance schedules and seeking advisement on repair and retrofit projects.
						</p>

						<img src={img} alt='' />

						<h2>A proactive and preventative approach to maintenance</h2>
						<p>At RJC, our people are experts in the materials and technology used in all types of North American buildings. They will tailor the scope of the project and budget to meet your needs. 
						</p>

						<h3>Types of audits and Studies</h3>
						<ul>
							<li>Building Envelope Condition Assessments</li>
							<li>Building Condition Assessments</li>
							<li>Capital Planning and Replacement Studies</li>
							<li>Code Review of Buildings</li>
							<li>Depreciation Reports / Reserve Fund Studies</li>
							<li>Due Diligence Reviews</li>
							<li>Energy Efficiency Upgrade Studies</li>
							<li>Expert Opinion (Litigation Support)</li>
							<li>Façade Condition Assessment and Pre-design Assessment</li>
							<li>Fall Protection System Review</li>
							<li>Feasibility Studies</li>
							<li>Heritage Conservation Evaluation</li>
							<li>LEED Durable Building Credit</li>
							<li>Life Cycle Costing Studies</li>
							<li>Load Reviews</li>
							<li>Maintenance and Renewals Planning</li>
							<li>Operational & Functional Screening</li>
							<li>Parking Garage Review and Durability Consulting</li>
							<li>Parking Planning</li>
							<li>Pavement Assessmentss</li>
							<li>Peer Review for Structural and Building Envelope Services</li>
							<li>Performance Audits (Envelope) </li>
							<li>Post-disaster Planning</li>
							<li>Post-Tensioning System Evaluation</li>
							<li>Pre-purchase Inspections</li>
							<li>Property Damage Assessments</li>
							<li>Roof Assessments and Surveys</li>
							<li>Second Opinions </li>
							<li>Seismic Screening</li>
							<li>Site Evaluation and Drainage Studies</li>
							<li>Structural Assessments</li>
							<li>Technical Audits</li>
							<li>Warranty and Maintenance Reviews</li>
						</ul>

						
					</div>
				</section>
				<Footer />
			</>
		);
	}
}