import React from 'react';
import { Header } from '../components/Header';
import PracticeAreaContent from '../components/PracticeAreaContent';
import Footer from '../components/Footer';

export default class practiceAreas extends React.Component {
	render()
	{
		return(
			<>
				<Header />
				<PracticeAreaContent />
				<Footer />
			</>
		);
	}
}