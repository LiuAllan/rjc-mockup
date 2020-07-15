import React from 'react';
import '../styles/StyledSearchbar.scss';
import Breadcrumbs from './Breadcrumbs';
import Grid from '@material-ui/core/Grid';

export class Searchbar extends React.Component {

	render(){
		return (
			<div className="sub-heading">
				<Grid 
					container   
					direction="row"
					justify="space-between"
					alignItems="center"
				>
					<Grid item md={6}>
						<div className="search">
							<input
								type="search"
							/>
						</div>
					</Grid>
					<Grid item md={6}>
						<div className="breadcrumbs">
							<Breadcrumbs />
						</div>
					</Grid>
				</Grid>
			</div>
		);
	}

}