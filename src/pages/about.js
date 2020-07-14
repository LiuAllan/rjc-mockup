import React from 'react';
import { Header } from '../components/Header';
import AboutContent from '../components/AboutContent';
import Footer from '../components/Footer';

export default class about extends React.Component {
	render()
	{
		return(
			<>
				<Header />
				<AboutContent />
				<Footer />
			</>
		);
	}
}