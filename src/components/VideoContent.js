import React from 'react';
import VideoCard from './VideoCard';
import '../styles/StyledPracticeArea.scss';
import Grid from '@material-ui/core/Grid';

import thumbnail_1 from '../videos/video1.jpg';
import thumbnail_2 from '../videos/video2.jpg';
import thumbnail_3 from '../videos/video3.jpg';
import thumbnail_4 from '../videos/video4.jpg';
import thumbnail_5 from '../videos/video5.jpg';
import thumbnail_6 from '../videos/video6.jpg';
import thumbnail_7 from '../videos/video7.jpg';
import thumbnail_8 from '../videos/video8.jpg';
import thumbnail_9 from '../videos/video9.jpg';
import thumbnail_10 from '../videos/video10.jpg';
import thumbnail_11 from '../videos/video11.jpg';

export default class VideoContent extends React.Component {
	render()
	{
		return(
			<section className="main-container">
				<div className="heading-container">
					<div className="random-square"></div>
					<h1>Videos</h1>
				</div>

				<div className="video-items-list">
					<Grid container spacing={1}>
						<Grid item md={4}>
							<VideoCard 
								thumbnail={thumbnail_1}
								link='https://player.vimeo.com/video/393713207?autoplay=1'
								title='2020 Structural & BIM Conference'
								description='Structural and BIM conference. Toronto, ON'
							/>
						</Grid>
						<Grid item md={4}>
							<VideoCard 
								thumbnail={thumbnail_2}
								link='https://player.vimeo.com/video/344177378?autoplay=1'
								title='RJC Celebrates Women in Engineering Day!'
								description='RJC celebrates women in Engineering 2019.'
							/>
						</Grid>
						<Grid item md={4}>
							<VideoCard 
								thumbnail={thumbnail_3}
								link='https://player.vimeo.com/video/276351117?autoplay=1'
								title='Women in Engineering Day 2018'
								description='RJC celebrates women in Engineering 2018.'
							/>
						</Grid>
						<Grid item md={4}>
							<VideoCard 
								thumbnail={thumbnail_4}
								link='https://player.vimeo.com/video/270392444?autoplay=1'
								title='2018 BSR National Conference'
								description='National Conference 2018. Calgary, AB'
							/>
						</Grid>
						<Grid item md={4}>
							<VideoCard 
								thumbnail={thumbnail_5}
								link='https://player.vimeo.com/video/255986370?autoplay=1'
								title='CISC 2017 - Schulich School of Engineering'
								description='The Schulich School of Engineering built by RJC 2017. Calgary, AB'
							/>
						</Grid>
						<Grid item md={4}>
							<VideoCard 
								thumbnail={thumbnail_6}
								link='https://player.vimeo.com/video/255987366?autoplay=1'
								title='CISC 2017 - Emerald Hills Leisure Centre'
								description='The Emerald Hills buidling. Sherwood Park, AB'
							/>
						</Grid>
						<Grid item md={4}>
							<VideoCard 
								thumbnail={thumbnail_7}
								link='https://player.vimeo.com/video/271495871?autoplay=1'
								title='CISC 2017 - Studio Bell'
								description='Home of the National Music Centre. Calgary, AB'
							/>
						</Grid>
						<Grid item md={4}>
							<VideoCard 
								thumbnail={thumbnail_8}
								link='https://player.vimeo.com/video/255988785?autoplay=1'
								title='Humber College Construction'
								description='Timelapse of the Humer College Construction. Toronto, ON'
							/>
						</Grid>
						<Grid item md={4}>
							<VideoCard 
								thumbnail={thumbnail_9}
								link='https://player.vimeo.com/video/247391653?autoplay=1'
								title='2017 ACMO Condo Conference'
								description='Interviews at the 2017 ACMO Condo Conference. Toronto, ON'
							/>
						</Grid>
						<Grid item md={4}>
							<VideoCard 
								thumbnail={thumbnail_10}
								link='https://player.vimeo.com/video/255990462?autoplay=1'
								title='Waterpark Place Phase III'
								description='Pedestrian Bridge for Waterpark Place. Toronto, ON'
							/>
						</Grid>
						<Grid item md={4}>
							<VideoCard 
								thumbnail={thumbnail_11}
								link='https://player.vimeo.com/video/255988271?autoplay=1'
								title='Columbia Icefield Skywalk'
								description='Construction timelapse of the Columbia Icefield Skywalk'
							/>
						</Grid>												
					</Grid>
				</div>
			
			</section>
		);
	}
}