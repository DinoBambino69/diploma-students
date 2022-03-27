import React from "react";
import './styles.css'

export const Button = (
	{
		title,
		link,
		onClick
	}
	) => {

	console.log(link)

	return (
		<a className='button' href={link} onClick={onClick}>
			<p className='text'>{title}</p>
		</a>
	)
}