import env from "@beam-australia/react-env";
import React from "react";

import Forecast from "./Forecast";

import "./App.css";
import logo from "./logo.svg";

function App() {
  const apiUrlBase = env("API_URL");
  const forecastUrl = `${apiUrlBase}WeatherForecast`;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>The API URL is: {env("API_URL")}</p>
        <Forecast forecastUrl={forecastUrl} />
      </header>
    </div>
  );
}

export default App;
