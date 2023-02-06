import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(){
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
  
    