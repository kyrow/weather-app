import React from 'react'
import styles from "./main.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud, faWind } from '@fortawesome/free-solid-svg-icons'

export function Main(data) {
	return (

<div className={styles.container}>

				<div className={styles.info}>
					<span className={styles.desc}>{data.data.name}</span>
					{data.data.main ? <span className={styles.degrees}>{data.data.main.temp.toFixed()}°C</span> : null }
					{data.data.main ? <span className={styles.Secdesc}>Feels like: {data.data.main.feels_like.toFixed()}°C</span>	: null}
				</div>

				<div className={styles.secondaryInfo}>
					{data.data.weather ? 
					<div className={styles.weatherType}>
						<span ><FontAwesomeIcon className={styles.weatherIcon} icon = {faCloud} /> </span>
						<span>{data.data.weather[0].main}</span>
					</div>	: null}
					{data.data.wind ? 
					<div className={styles.weatherType}>
					<span ><FontAwesomeIcon className={styles.weatherIcon} icon = {faWind} /> </span>
					<span>	Wind speed: {data.data.wind.speed} km/h</span>	
					</div>	: null}
				</div>
</div>
		
	)
}