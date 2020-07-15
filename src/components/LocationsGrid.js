import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import '../styles/StyledLocationsGrid.scss';

const LocationsGrid = () => (

		<div className="locations-grid-container">
			<Grid 
				container 
				spacing={1}
				direction="row"
				justify="space-around"
				alignItems="center"
			>
				<Grid item md={6}>
					<Paper className='card' elevation={3}>
					<p className="city">Vancouver</p>
						<p>1285 West Broadway</p>
						<p>Suite 300</p>
						<p>Vancouver BC V6H 3X8</p>
						<p>Phone: 604.738.0048</p>
						<p>Fax: 604.738.1107</p>
					</Paper>
				</Grid>
				<Grid item md={6}>
					<Paper className='card' elevation={3}>
						<p className="city">Surrey</p>
						<p>1285 West Broadway</p>
						<p>Suite 300</p>
						<p>Vancouver BC V6H 3X8</p>
						<p>Phone: 604.738.0048</p>
						<p>Fax: 604.738.1107</p>
					</Paper>
				</Grid>
				<Grid item md={6}>
					<Paper className='card' elevation={7}>
						<p className="city">Victoria</p>
						<p>1285 West Broadway</p>
						<p>Suite 300</p>
						<p>Vancouver BC V6H 3X8</p>
						<p>Phone: 604.738.0048</p>
						<p>Fax: 604.738.1107</p>
					</Paper>
				</Grid>
				<Grid item md={6}>
					<Paper className='card' elevation={5}>
						<p className="city">Nanaimo</p>
						<p>1285 West Broadway</p>
						<p>Suite 300</p>
						<p>Vancouver BC V6H 3X8</p>
						<p>Phone: 604.738.0048</p>
						<p>Fax: 604.738.1107</p>
					</Paper>
				</Grid>
				<Grid item md={6} sm={5}>
					<Paper className='card' elevation={3}>
						<p className="city">Kelowna</p>
						<p>1285 West Broadway</p>
						<p>Suite 300</p>
						<p>Vancouver BC V6H 3X8</p>
						<p>Phone: 604.738.0048</p>
						<p>Fax: 604.738.1107</p>
					</Paper>
				</Grid>
				<Grid item md={6} sm={7}>
					<Paper className='card' elevation={3}>
						<p className="city">Calgary</p>
						<p>1285 West Broadway</p>
						<p>Suite 300</p>
						<p>Vancouver BC V6H 3X8</p>
						<p>Phone: 604.738.0048</p>
						<p>Fax: 604.738.1107</p>
					</Paper>
				</Grid>
				<Grid item md={6} sm={5}>
					<Paper className='card' elevation={3}>
						<p className="city">Edmonton</p>
						<p>1285 West Broadway</p>
						<p>Suite 300</p>
						<p>Vancouver BC V6H 3X8</p>
						<p>Phone: 604.738.0048</p>
						<p>Fax: 604.738.1107</p>
					</Paper>
				</Grid>
				<Grid item md={6} sm={7}>
					<Paper className='card' elevation={3}>
						<p className="city">Saskatoon</p>
						<p>1285 West Broadway</p>
						<p>Suite 300</p>
						<p>Vancouver BC V6H 3X8</p>
						<p>Phone: 604.738.0048</p>
						<p>Fax: 604.738.1107</p>
					</Paper>
				</Grid>
			</Grid>
		</div>
);

export default LocationsGrid;