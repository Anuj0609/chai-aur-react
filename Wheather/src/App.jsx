import { useState } from "react";
import axios from "axios";

function App() {
  const apikey = "MWCg3OcvciAzFpWYYxs65qwuWTVeHolE";
  const [searchLocation, setSearchLocation] = useState();
  const [locationResult, setLocationResult] = useState([]);
  const [weather, setWeather] = useState("");

  const findLocation = async () => {
    if (!searchLocation) {
      return;
    }
    const locationAPI = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apikey}&q=${searchLocation}`;

    const result = await axios.get(locationAPI);
    console.log(result.data);
    setLocationResult(result.data);
  };

  const weatherResult = async (locationKey) => {
    const weatherAPI = `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apikey}`;
    const result = await axios.get(weatherAPI);
    console.log(result.data);
    setWeather(result.data);
  };

  return (
    <>
      <div className="main">
        <div className="top">
          <div className="search">
            <input
              type="text"
              placeholder="Your Location"
              onChange={(e) => {
                setSearchLocation(e.target.value);
              }}
            />

            <button onClick={findLocation}>Search Location</button>
            {locationResult.map((location) => {
              return (
                <div key={location.Key}>
                  <button
                    onClick={() => {
                      console.log(location);
                      weatherResult(location.Key);
                    }}
                  >
                    {location.LocalizedName}{" "}
                    {location.AdministrativeArea.LocalizedName}
                  </button>
                </div>
              );
            })}
          </div>

          {weather ? (
            <div>
              <div className="temp">
                temp:{weather[0].Temperature.Metric.Value}
              </div>
              <div className="condition">
                condition:{weather[0].WeatherText}
                {weather[0].Temperature.WeatherIcon}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default App;
