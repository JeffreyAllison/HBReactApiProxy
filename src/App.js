import PokemonSearch from './PokemonSearch';
import YelpSearch from './YelpSearch';
import WeatherSearch from './WeatherSearch';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <PokemonSearch />
      <YelpSearch />
      {/* stretch goal: <WeatherSearch /> */}
    </div>
  );
}

export default App;
