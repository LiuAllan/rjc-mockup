import React from 'react';
import '../styles/Item.scss';

const Item = (props) => (
	<div className="item-square-container">
		<img className="image" src={props.image} alt="" />
		<div className="middle">
			<div className="text">{props.text}</div>
		</div>
	</div>
);

export default Item;