import React from 'react';
import { Header } from '../components/Header';
import MediaContent from '../components/MediaContent';
import Footer from '../components/Footer';

export default class media extends React.Component {
	render()
	{
		return(
			<>
				<Header />
				<MediaContent />
				<Footer />
			</>
		);
	}
}