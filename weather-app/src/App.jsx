import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const apikey = "MWCg3OcvciAzFpWYYxs65qwuWTVeHolE";
  const [locationSearchInput, setLocationSearchInput] = useState("");
  const [locationSearchResults, setLocationSearchResults] = useState([]);
  const [weather, setWeather] = useState("");
  const [weatherCondition, setWeatherCondition] = useState("");

  const getLocation = async () => {
    if (!locationSearchInput) return;
    const url = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apikey}&q=${locationSearchInput}`;

    const res = await axios.get(url);
    setLocationSearchResults(res.data);
  };

  const getCurrentCondition = async (locationKey) => {
    const url = `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apikey}`;
    const res = await axios.get(url);
    setWeather(res.data);
    setWeatherCondition(res.data[0].WeatherText.toLowerCase());
  };

  const getBackgroundClass = () => {
    if (weatherCondition.includes("clear")) return "weather-clear";
    if (weatherCondition.includes("cloudy")) return "weather-cloudy";
    if (
      weatherCondition.includes("rain") ||
      weatherCondition.includes("showers")
    )
      return "weather-rainy";
    if (weatherCondition.includes("snow")) return "weather-snowy";
    return "";
  };

  return (
    <div className={`container ${getBackgroundClass()}`}>
      <h1>Weather Report</h1>
      <input
        type="text"
        placeholder="Enter location"
        onChange={(e) => {
          setLocationSearchInput(e.target.value);
        }}
      />
      <button onClick={getLocation}>Search Location</button>
      <div className="results">
        {locationSearchResults.map((location) => (
          <div key={location.Key} className="location-button">
            <button
              onClick={() => {
                getCurrentCondition(location.Key);
              }}
            >
              {location.LocalizedName} -{" "}
              {location.AdministrativeArea.LocalizedName}
            </button>
          </div>
        ))}
      </div>
      {weather && (
        <div className="weather-info">
          {weather[0].WeatherText}: {weather[0].Temperature.Metric.Value}°C
        </div>
      )}
    </div>
  );
}

export default App;
