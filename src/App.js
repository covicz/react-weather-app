import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      
      <Weather defaultcity="London"/>
      <footer>
        Coded by Paulina Konieczkowicz and is open-sourced on{" "}
        <a
          href="https://github.com/covicz/react-weather-app.git"
          terget="_blank">
            GitHub
        </a>
      </footer>
      </div>
    </div>
  );
}

 
