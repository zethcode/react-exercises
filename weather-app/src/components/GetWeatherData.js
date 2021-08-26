import { useState } from 'react'

const GetWeatherData = (props) => {
    const [weatherData, setWeatherData] = useState()

    (!Array.isArray(props.lat) && !Array.isArray(props.long)) 
    && (fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${props.lat}&lon=${props.long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
    .then(res => res.json())
    .then(result => {
        setWeatherData(result)
        return { weatherData }
    }))
}

export default GetWeatherData
