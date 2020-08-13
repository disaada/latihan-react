import React, { useState, Fragment } from 'react'
import axios from 'axios'

function InputText () {

	//const [value, setValue] = useState('')
	const [name, setName] = useState('')
	const [address, setAddress] = useState('')

	/*function handleChange(evt) {
		setValue(evt.target.value)
	}*/

	function handleAddress(evt) {
		setAddress(evt.target.value)
	}

	function handleName(evt) {
		setName(evt.target.value)
	}

	const handleClick = (evt) => {
		//alert(value)
		const data = {
			name,
			address
		}

		axios.post('http://192.168.100.224:4000', data)
	}

	return(
		<Fragment>

			<br/>
			Name :
			<input 
			style={{margin: '10px'}}
			onChange={handleName}
			value={name}
			/>
			Address :
			<input 
			style={{margin: '10px'}}
			onChange={handleAddress}
			value={address}
			/>
			<button onClick={handleClick}>Send</button>
			<p> My name is : {name} i'm from {address} </p>
		</Fragment>
	)
}

export default InputText