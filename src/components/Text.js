import React from 'react'

function text(props) {

	const { location } = props
	const redText = { color: 'red' }

	return(
		<span style={redText}> {location} </span>
	)
}

export default text