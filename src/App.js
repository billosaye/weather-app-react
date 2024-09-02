import React, { useState } from 'react';

const API_KEY = 'ac2cbff9b0f11b73a902435fe42d8877';

const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      fetchWeather();
    }
  };

  return (
    <div className='app'>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
          />
          <button type="submit">Search</button>
        </form>

        {loading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}

        {weather && (
          <div className='weather-info'>
            <div className='top'>
              <div className='location'>
                <p>{weather.name}</p>
              </div>
              <div className='temp'>
                <h1>{Math.round(weather.main.temp)}°C</h1>
              </div>
              <div className='description'>
                <p>{weather.weather[0].description}</p>
              </div>
            </div>
            <div className='bottom'>    
              <div className='feels'>
                <p className='bold'>{Math.round(weather.main.feels_like)}°C</p>
                <p>Feels Like</p>
              </div>   
              <div className='humidity'>
                <p className='bold'>{weather.main.humidity}%</p>
                <p>Humidity</p>
              </div>
              <div className='wind'>
                <p className='bold'>{Math.round(weather.wind.speed)} m/s</p>
                <p>Wind Speed</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );  
}

export default App;