import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){
    function handleResponse(response){
        console.log(response.data);
    }
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiKey = "3a94f3778290bfeee61278505dbbe51d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
<div className="ForecastDay">Thu</div>
<div className="ForecastImg">
    <img src={`http://openweathermap.org/img/wn/10d@2x.png`} alt=""></img>
</div>
<div className="WeatherForecast-temp">
<span className="ForecastTemp-max">20°</span>
<span className="ForecastTemp-min">10°</span>
</div>
                </div>
            </div>
        </div>
    );
}
  
    