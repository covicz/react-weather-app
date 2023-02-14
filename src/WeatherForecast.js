import React, {useState} from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);
    function handleResponse(response){
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded){   
        console.log(forecast);
         return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
<div className="ForecastDay">{forecast[0].dt}</div>
<div className="ForecastImg">

</div>
<div className="WeatherForecast-temp">
<span className="ForecastTemp-max">{forecast[0].temp.max}°</span>
<span className="ForecastTemp-min">{forecast[0].temp.min}°</span>
</div>
                </div>
            </div>
        </div>
    );
  
    }else {       
let longitude = props.coordinates.lon;
let latitude = props.coordinates.lat;
let apiKey = "3a94f3778290bfeee61278505dbbe51d";
let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(handleResponse);
return null;
    }
}
  
    



