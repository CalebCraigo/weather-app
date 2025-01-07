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
            <div>
                <div>{fetchedData.data.data.location.name}</div>
                <div>{fetchedData.data.data.current.temperature}</div>
                <div>{fetchedData.data.data.current.weather_descriptions[0]}</div>
                <div>{fetchedData.data.data.current.observation_time}</div>
            </div> :
            <div></div>
        
        }
    </div>
  )
}

export default WeatherComponent