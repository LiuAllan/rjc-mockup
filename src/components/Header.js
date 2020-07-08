import React from 'react';
import { Navbar } from './Navbar';
import { Searchbar } from './Searchbar';

export const Header = () => {
	return (
		<>
			<Navbar />
			<Searchbar />
		</>
	);
}