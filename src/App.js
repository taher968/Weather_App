import './App.css';
import Form from './components/Form'
import {useState} from 'react'
import City from './components/City'


function App() {
  const [city, setCity] = useState([

  ])
  const API_ID = "18be2ea3a0b695a29b89b5ecfedaab23"
    const submitForm = async (e) => {
      const cityName = e.target.elements.cityName.value
      e.preventDefault()
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${API_ID}`)
      const info = await api_call.json()
      const data = [{
        temp: info.main.temp,
        feelsLike: info.main.feels_like,
        tempMin: info.main.temp_min,
        tempMax: info.main.temp_max,
        weather: info.weather[0].main,
        name: info.name,
        country: info.sys.country
      }]
      setCity(data)
      console.log(city)
    }
  return (
    <div className="container">
      <h1 className='heading'>Weather App</h1>
      <Form submitForm={submitForm} />
      {console.log(city.length)}
      {city.length > 0 ? (<City city={city} />) : ''}
    </div>
  );
}

export default App;
