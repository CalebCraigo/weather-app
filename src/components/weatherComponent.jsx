import {React, useState } from 'react'
import './weatherComponent.css'

function WeatherComponent(props) {
  const [count, setCount] = useState(0)

  return (
    <div>
        <div>{props.data.location.name}</div>
        <div>{props.data.current.temperature}</div>
        <div>{props.data.current.weather_descriptions[0]}</div>
        <div>{props.data.current.observation_time}</div>
    </div>
  )
}

export default WeatherComponent