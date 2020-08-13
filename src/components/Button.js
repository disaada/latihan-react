import React, { useState } from 'react'

function Button(props) {

	//const { children, name, age } = props
	const { children } = props
	const [active, setActive] = useState(false)

	function handleClick() {
		//console.log("click")
		//console.log(props)

		setActive(!active)
	}

	return(
		<button onClick={handleClick}> 
		{children}
		: 
		{active ? 'active' : 'not active'}
		</button>
	)
}

export default Button