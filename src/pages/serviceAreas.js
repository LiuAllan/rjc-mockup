import React from 'react';
import { Header } from '../components/Header';
import ServiceAreaContent from '../components/ServiceAreaContent';
import Footer from '../components/Footer';

export default class serviceAreas extends React.Component {
	render()
	{
		return(
			<>
				<Header />
				<ServiceAreaContent />
				<Footer />
			</>
		);
	}
}