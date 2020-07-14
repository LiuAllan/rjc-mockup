import React from 'react';
import { Header } from '../components/Header';

import Footer from '../components/Footer';

export default class about extends React.Component {
	render()
	{
		return(
			<>
				<Header />
				<p>This is about page</p>
				<Footer />
			</>
		);
	}
}