import './App.css';
import { useEffect, useState } from 'react'
import GetLocation from './components/GetLocation';
import GetWeatherData from './components/GetWeatherData';
import Weather from './components/Weather';

function App() {
  const [lat, setLat] = useState([])
  const [long, setLong] = useState([])
  const [weatherData, setWeatherData] = useState()

  const setLocation = () => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    })
  }

  const getLocationAndWeather = async () => {
    setLocation()
    await (!Array.isArray(lat) && !Array.isArray(long)) 
    && (fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
    .then(res => res.json())
    .then(result => {
        setWeatherData(result)
        console.log('result', result)
    }))

    // await (!Array.isArray(lat) && !Array.isArray(long) && weatherData != 'undefined') 
    // && (fetch(`${process.env.REACT_APP_GEO_URL}/reverse?lat=${lat}&lon=${long}&APPID=${process.env.REACT_APP_API_KEY}`)
    // .then(res => res.json())
    // .then(result => {
    //   setWeatherData([weatherData, result])
    //   console.log('widir', weatherData)
    // }))
  }

  useEffect(() => {
    getLocationAndWeather()
    console.log('result', weatherData)
  }, [lat, long])

  return (
    <div className="App">
      <div className="App-header">
      {(typeof weatherData != 'undefined' && typeof weatherData.main != 'undefined')
        ? <Weather weatherData={weatherData} />
        : <h1 className="header">Please allow access to your browser's location to gather data.</h1>
      }
      </div>
    </div>
  );
}

export default App;
