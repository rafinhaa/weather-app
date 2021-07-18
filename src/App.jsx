import React, {useState, useEffect} from 'react'
import './App.css'
import HelloWorld from './components/HelloWorld'
import {api} from "./services/weatherApi"
import { FaTemperatureHigh, FaWind  } from 'react-icons/fa'

function App() {
  const [weather, setWeather] = useState("");
  const [city, setCity] = useState("");
  const [search, setSearch] = useState("");
  async function handleGetWather(event) {
    event.preventDefault()
    const response = await api.get(search)
    console.log(response.data)
    setCity(search)
    setWeather(response.data)
  }

  /*useEffect(() =>{
    handleGetWather()
  },[search])*/
  return (
    <div className="App">
      <header>
        <form onSubmit={handleGetWather}>
          <input type="text" value={search} onChange={ (event)=> setSearch(event.target.value) }/>
          <button >Buscar</button>
        </form>
      </header>      
      { weather &&
      <main>
        <p>{ /** JSON.stringify(weather) */}</p>
        <h1>{city}</h1>
        <section className="current-weather">
          <h2>Current weather</h2>
          <p>{weather.temperature}</p>
          <p>{weather.description}</p>
        </section>        
        <section className="forecast">
          <h2>Forecast</h2>
          <ol>
            {            
              weather.forecast.map( day =>
                <li>
                  <div><FaTemperatureHigh/><p>{day.temperature}</p></div>                  
                  <div><FaWind/><p>{day.wind}</p></div>                  
                </li>
              )            
            }
          </ol>
        </section>
      </main>
    }
    </div>
  )
}

export default App
