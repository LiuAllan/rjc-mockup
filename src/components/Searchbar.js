import React from 'react';
import '../styles/StyledSearchbar.scss';

export class Searchbar extends React.Component {

	render(){
		return (
			<div className="sub-heading">
				<div className="search">
					<input
						type="search"
					/>
				</div>
			</div>
		);
	}

}