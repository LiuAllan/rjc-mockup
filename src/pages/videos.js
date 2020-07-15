import React from 'react';
import { Header } from '../components/Header';
import VideoContent from '../components/VideoContent';
import Footer from '../components/Footer';

export default class videos extends React.Component {
	render()
	{
		return(
			<>
				<Header />
				<VideoContent />
				<Footer />
			</>
		);
	}
}