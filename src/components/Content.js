import React from 'react';
import SlickSlider from './SlickSlider';
import MainContent from './MainContent';

export default class Content extends React.Component {
	render()
	{
		return (
			<div className="content-container" style={{ "height": "100%"}}>
				<SlickSlider />
				<MainContent />
			</div>
		);
	}
}