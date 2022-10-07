import React from 'react';

const Scroll = (props) => {
	return(
		<div style={{ overflowY: 'scroll',  height: '550px' }}>
			{props.children}
		</div>
	)
}
// can add a border around scrollable screen using border: 1px solid black
export default Scroll;