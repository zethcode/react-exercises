import '../styles.css'
import { Card } from 'semantic-ui-react'
import { Button } from '@material-ui/core'
import moment from 'moment'

const Weather = ({ weatherData }) => {
    const refresh = () => {
        window.location.reload();
    }

    return (
        <Card className="main">
            <Card.Content className="main">
                <Card.Header className="header">
                    {weatherData.name}, {weatherData.sys.country}
                    <Button variant="contained" color='default' onClick={refresh}>Refresh Data</Button>
                </Card.Header>
                <Card.Description className="card-body">
                    <div className="flex">
                        <p><b>{moment().format('LL')} ({moment().format('dddd')})</b></p>
                        <p><b>"{weatherData.weather[0].description}"</b></p>
                    </div>
                    <div className="flex">
                        <p>Temprature: {weatherData.main.temp} &deg;C</p>
                        <p className="temp">Humidity: {weatherData.main.humidity} %</p>
                    </div>
                    <div className="flex">
                        <p className="sunrise-sunset">Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
                        <p className="sunrise-sunset">Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
                    </div>
                </Card.Description>
            </Card.Content>
        </Card>
    )
}

export default Weather
