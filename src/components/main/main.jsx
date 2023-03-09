import React,{useState} from 'react'
import styles from "./main.module.css"


export function Main(props) {

	return (
<div className={styles.container}>
				<div className={styles.info}>
					<span className={styles.desc}>{props.data.name}</span>
					{props.data.main ? <span className={styles.degrees}>{props.data.main.temp.toFixed()}°C</span> : null }
				</div>
</div>
		
	)
}