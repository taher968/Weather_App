import React from 'react'

function Weather(props) {
    if(props.weather == 'Clear') {
        return <h3> Weather: {props.weather} <i class='fas fa-sun'></i></h3>
    }

    if(props.weather == 'Clouds') {
        return <h3> Weather: {props.weather} <i class='fas fa-cloud-sun'></i></h3>
    }

    if(props.weather == 'Haze') {
        return <h3> Weather: {props.weather} <i class='fas fa-smog'></i></h3>
    }
    if(props.weather == 'Rain') {
        return <h3> Weather: {props.weather} <i class='fas fa-cloud-showers-heavy'></i></h3>
    }
    if(props.weather == 'Drizzle') {
        return <h3> Weather: {props.weather} <i class='fas fa-cloud-rain'></i></h3>
    }
    if(props.weather == 'Snow') {
        return <h3> Weather: {props.weather} <i class='fas fa-snowflake'></i></h3>
    }

    else {
        return <h3> Weather: {props.weather} </h3>
    }
    
}

export default Weather
