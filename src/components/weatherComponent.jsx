import {React, useState } from 'react'
import useFetchData from '../containers/useFetchData'
import './weatherComponent.css'

function WeatherComponent(props) {
  const [count, setCount] = useState(0)

  let fetchedData = useFetchData("London");
  console.log("data", fetchedData);
  return (
    <div>
        {!fetchedData.isLoading ? 
            <div className="info-box">
                <div className="locale-name">{fetchedData.data.data.location.name}</div>
                <div className="locale-temp">{fetchedData.data.data.current.temperature}</div>
                <div className="locale-feels-like">{fetchedData.data.data.current.feelslike}</div>
                <div className="locale-weather">{fetchedData.data.data.current.weather_descriptions[0]}</div>
                {/* <div className="locale-weather-icons">{fetchedData.data.data.current.weather_icons}</div> */}
                <div className="locale-wind-speed">{fetchedData.data.data.current.wind_speed}</div>
                <div className="locale-time">{fetchedData.data.data.current.observation_time}</div>
            </div> :
            <div></div>
        
        }
    </div>
  )
}

export default WeatherComponent