import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
function App() {
  const [inputLocation, setInputLocation] = useState("");
  const [resultLocation, setResultLocation] = useState([]);
  const [weatherResult, setWeatherResult] = useState();

  const apiKey = "MWCg3OcvciAzFpWYYxs65qwuWTVeHolE";

  const getLocation = async () => {
    if (inputLocation) {
      const url = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${inputLocation}`;
      const response = await axios.get(url);
      console.log(response.data);
      setResultLocation(response.data);
      setInputLocation("");
    }
  };

  const getWeather = async (locationKey) => {
    const url = `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}`;
    const result = await axios.get(url);
    console.log(result.data);
    setWeatherResult(result.data);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Your Location"
        value={inputLocation}
        onChange={(e) => {
          setInputLocation(e.target.value);
        }}
      />
      <button onClick={getLocation}>Search</button>
      {resultLocation.map((location) => {
        return (
          <button
            key={location.Key}
            onClick={() => {
              getWeather(location.Key);
            }}
          >
            {location.LocalizedName}
            {"-"}
            {location.AdministrativeArea.ID}
          </button>
        );
      })}
      {weatherResult ? (
        <div>
          <div className="temp">
            temp:{weatherResult[0].Temperature.Metric.Value}
          </div>
          <div className="condition">
            condition:{weatherResult[0].WeatherText}
            {weatherResult[0].Temperature.WeatherIcon}
          </div>
        </div>
      ) : null}{" "}
    </>
  );
}

export default App;
