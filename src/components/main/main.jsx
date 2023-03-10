import React from 'react'
import styles from "./main.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud, faWind, faCloudRain, faSnowflake, faSmog, faCloudSun } from '@fortawesome/free-solid-svg-icons'

export function Main(data) {
	return (

<div className={styles.container}>

				<div className={styles.info}>
					<span className={styles.desc}>{data.data.name}</span>
					{data.data.main ? <span className={styles.degrees}>{data.data.main.temp.toFixed()}°C</span> : null }
					{data.data.main ? <span className={styles.Secdesc}>Feels like: {data.data.main.feels_like.toFixed()}°C</span>	: null}
				</div>

				<div className={styles.secondaryInfo}>

					<div className={styles.weatherType}>

						{data.data.main ?
							data.data.weather[0].main === 'Clouds' ?
							<>
							<span ><FontAwesomeIcon className={styles.weatherIcon} icon = {faCloud} /> </span>
							<span>{data.data.weather[0].main}</span>
							</>
							: null
						: null }	
						
						{data.data.main ?
							(data.data.weather[0].main === 'Rain') ?
							<>
							<span ><FontAwesomeIcon className={styles.weatherIcon} icon = {faCloudRain} /> </span>
							<span>{data.data.weather[0].main}</span>
							</>
							: null
						: null }	
						
						{data.data.main ?
							(data.data.weather[0].main === 'Snow') ?
							<>
							<span ><FontAwesomeIcon className={styles.weatherIcon} icon = {faSnowflake} /> </span>
							<span>{data.data.weather[0].main}</span>
							</>
							: null
						: null }	

						{data.data.main ?	
							(data.data.weather[0].main === 'Smoke') ?
							<>
							<span ><FontAwesomeIcon className={styles.weatherIcon} icon = {faSmog} /> </span>
							<span>{data.data.weather[0].main}</span>
							</>
							: null
						: null }			
						
						{data.data.main ?			
							(data.data.weather[0].main === 'Clear') ?
							<>
							<span ><FontAwesomeIcon className={styles.weatherIcon} icon = {faCloudSun} /> </span>
							<span>{data.data.weather[0].main}</span>
							</>
							: null
						: null }	
					
					</div>
					
					{data.data.wind ? 
					<div className={styles.weatherType}>
					<span ><FontAwesomeIcon className={styles.weatherIcon} icon = {faWind} /> </span>
					<span>	Wind speed: {data.data.wind.speed} km/h</span>	
					</div>	: null}
				</div>
</div>
		
	)
}