import { useState } from 'react'
import WeatherComponent from './components/weatherComponent'
import SearchBar from './containers/searchBar'
import './App.css'

function App() {
    const mockData = {
    "request": {
        "type": "City",
        "query": "New York, United States of America",
        "language": "en",
        "unit": "m"
    },
    "location": {
        "name": "New York",
        "country": "United States of America",
        "region": "New York",
        "lat": "40.714",
        "lon": "-74.006",
        "timezone_id": "America/New_York",
        "localtime": "2019-09-07 08:14",
        "localtime_epoch": 1567844040,
        "utc_offset": "-4.0"
    },
    "current": {
        "observation_time": "12:14 PM",
        "temperature": 13,
        "weather_code": 113,
        "weather_icons": [
            "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
        ],
        "weather_descriptions": [
            "Sunny"
        ],
        "wind_speed": 0,
        "wind_degree": 349,
        "wind_dir": "N",
        "pressure": 1010,
        "precip": 0,
        "humidity": 90,
        "cloudcover": 0,
        "feelslike": 13,
        "uv_index": 4,
        "visibility": 16
    }
}  
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <h1>weather-app</h1>
      <SearchBar />
      <div className="headers">
        <h2 className='header'>Location</h2>
        <h2 className={'vertical-line' + ' header'}>Temperature</h2>
        <h2 className={'vertical-line' + ' header'}>Feels Like</h2>
        <h2 className={'vertical-line' + ' header'}>Description</h2>
        <h2 className={'vertical-line' + ' header'}>Wind Speed</h2>
        <h2 className={'vertical-line' + ' header-end'}>Current Time</h2>
      </div>
      <WeatherComponent data={mockData}/>
    </div>
  )
}

export default App
