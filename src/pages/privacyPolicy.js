import React from 'react';
import { Header } from '../components/Header';
import Footer from '../components/Footer';
import '../styles/StyledInfo.scss';


const privacyPolicy = () => {
	return (
		<>
			<Header />
				<section className="main-container">
					<p>Privacy Policy: Read Jones Christoffersen's Privacy Statement</p>
					<h3>Our Privacy Principles</h3>
					<ul>
						<li>We do not sell the personal or private information of our clients, prospective clients, job applicants, staff or anyone who provides us with private information through this web site or other means.</li>
						<li>We do not provide personal information about an individual to individuals or organizations outside of Read Jones Christoffersen Ltd., unless we have your consent for doing so.</li>
						<li>We require any person or organization providing products or services to our clients to protect the confidentiality of Read Jones Christoffersen's client information.</li>
						<li>We afford prospective and former clients the same protections as existing clients, with respect to the use of personal information.</li>
						<li>We afford job applicants the same protections as staff, with respect to the use of personal information.</li>

						<h3>Information We May Collect</h3>
						<p>We collect and use information that is necessary to administer our business, to advise you about our services and to provide you with outstanding customer service.</p>

						<h3>Information Disclosure</h3>
						<p>We share information about our transactions with you within Read Jones Christoffersen to better serve you and meet your current needs. We may also discuss information about you to persons or organizations as permitted or required by law.</p>

						<h3>Your Awareness and Permission</h3>
						<p>Being a Read Jones Christoffersen client, staff member, or job applicant, you provide us with your consent for collection, use and disclosure of certain personal information.</p>

						<h3>Read Jones Christoffersen Protects Information</h3>
						<p>We maintain physical, electronic and organizational safeguards to protect private information. We continually review our policies and practices, and we monitor our computer networks to ensure the safety of private information.</p>

					</ul>
				</section>
			<Footer />
		</>
	);
}

export default privacyPolicy;