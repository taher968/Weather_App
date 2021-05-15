import React from 'react'
import { Loader } from "@googlemaps/js-api-loader"


const City = ({ city }) => {

    const temp = Math.round(Number(city[0].temp) - 273) 
    const feelsLike = Math.round(Number(city[0].feelsLike) - 273) 
    const tempMin = Math.round(Number(city[0].tempMin) - 273) 
    const tempMax = Math.round(Number(city[0].tempMax) - 273) 
    const weather = city[0].weather
    


    return (
        <div>
            <h1> {city[0].name}, {city[0].country} </h1>

            <h3> Temperature: {temp} °C </h3>
            <h3> Minimum: {tempMin} °C</h3>
            <h3> Maximum: {tempMax} °C</h3>
            <h3> Feels Like: {feelsLike} °C</h3>
            <h3> Weather: {weather}</h3>


        </div>
    )


}

export default City
