/*import { useState, useEffect } from 'react';
import { getWeather } from './services/fetch-utils';
import LoadingSpinner from './LoadingSpinner';
import WeatherList from './WeatherList';
export default function WeatherSearch() {
  // you'll need to track your weather search results, the loading state, and a form field for location with a default value.

  const [weatherData, setWeatherData] = useState([]);
  const [weatherDataQuery, setWeatherDataQuery] = useState('');
  const [loadingSpinner, setLoadingSpinner] = useState(false);

  async function load() {
    setLoadingSpinner(true);
    const data = await getWeather(weatherDataQuery);

    setLoadingSpinner(false);
    setWeatherData(data);
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleWeatherSubmit(e) {
    e.preventDefault();
    load();

    // set the loading state to true
    // use fetch to make a request to your netlify weather function. Be sure to pass the location as a query param in the URL

    // put the jsonified data in state and set the loading state to false
  }

  return (
    <section className="weather">
      {/* make the fetch on submit */}
      <form onSubmit={handleWeatherSubmit}>
        Search weather for a city
        {/* add inputs/labels for city name, state, and country, using all the things we need with react forms. Don't forget to use the value property to sync these up with the default values in react state */}
        <input onChange={(e) => setWeatherDataQuery(e.target.value)} />
        <button>Get weather</button>
      </form>
      {/* Make a ForecastList component to import and use here. Use a ternery to display a loading spinner (make a <Spinner /> component for this) if the data is still loading. */}
      <header className="weather">
        {loadingSpinner ? <LoadingSpinner /> : <WeatherList weatherData={weatherData} />}
      </header>
    </section>
  );
}
