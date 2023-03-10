import axios from "axios"
import React,{useState} from 'react'
import { Main } from "../main/main"
import styles from "./header.module.css"

export function Header() {

	const [data,setData] = useState({})	
	const [location,setLocation] = useState('')
	
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=f09ae8ab1c9d0d91991eba6dd3d8b83e`

	const searchLocation = (event) => {
		if (event.key === 'Enter') {
			axios.get(url).then((response)=>{
				setData(response.data)
				console.log(response.data.weather[0].main)
			})
			setLocation('')
		}
	}

	return (
		<div className={styles.background}>
		<div className={styles.container}>
			<div className={styles.search}>		
			
  			<input 
					id="search" 
					onChange={event => setLocation(event.target.value)}
					onKeyDown={searchLocation}
					name="search" 
					type="text" 
					placeholder="type your city" />
				<input id="search_submit" value="Rechercher" type="submit" />
						
			</div>
		</div>
		<Main data={data} />
		</div>
	)
}