import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const apikey = "MWCg3OcvciAzFpWYYxs65qwuWTVeHolE";
  const [locationSearchInput, setLocationSearchInput] = useState("");
  const [locationSearchResults, setLocationSearchResults] = useState([]);
  const [weather, setWeather] = useState(null);
  const [weatherCondition, setWeatherCondition] = useState("");
  const [error, setError] = useState("");

  const getLocation = async () => {
    if (!locationSearchInput) return;
    const url = `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apikey}&q=${locationSearchInput}`;

    try {
      const res = await axios.get(url);
      setLocationSearchResults(res.data);
      setError("");
    } catch (err) {
      setError("Failed to fetch location data.");
      setLocationSearchResults([]);
    }
  };

  const getCurrentCondition = async (locationKey) => {
    const url = `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apikey}`;
    try {
      const res = await axios.get(url);
      setWeather(res.data[0]);
      setWeatherCondition(res.data[0].WeatherText.toLowerCase());
      setError(""); 
    } catch (err) {
      setError("Failed to fetch weather data.");
      setWeather(null);
    }
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
        value={locationSearchInput}
        onChange={(e) => {
          setLocationSearchInput(e.target.value);
        }}
      />
      <button onClick={getLocation}>Search Location</button>
      {error && <div className="error">{error}</div>}
      <div className="results">
        {locationSearchResults.length > 0 ? (
          locationSearchResults.map((location) => (
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
          ))
        ) : (
          <div>No locations found.</div>
        )}
      </div>
      {weather && (
        <div className="weather-info">
          {weather.WeatherText}: {weather.Temperature.Metric.Value}°C
        </div>
      )}
    </div>
  );
}

export default App;
