import { useState, useEffect } from 'react';
import { getPokemon } from './services/fetch-utils';
import LoadingSpinner from './LoadingSpinner';
export default function PokemonSearch() {
  // you'll need to track your pokemon search results, the loading state, and one form field: name. For this form field, set a real initial values (like 'pikachu') so the form populates with a default value.

  const [pokemon, setPokemon] = useState([]);
  const [pokemonQuery, setPokemonQuery] = useState('');
  const [loadingSpinner, setLoadingSpinner] = useState(false);

  async function load() {
    setLoadingSpinner(true);
    const {
      data: { results },
    } = await getPokemon(pokemonQuery);

    setLoadingSpinner(false);
    setPokemon(results);
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handlePokemonSubmit(e) {
    e.preventDefault();
    load();

    // set the loading state to true
    // use fetch to make a request to your netlify pokemon function. Be sure to pass the pokemon name as a query param in the URL

    // put the jsonified data in state and set the loading state to false
  }

  return (
    <section className="pokemon">
      {/* make the fetch on submit */}
      <form onSubmit={handlePokemonSubmit}>
        Search pokemon
        {/* add inputs/labels for the pokemon name, using all the things we need with react forms. Don't forget to use the value property to sync this up with the default value in react state */}
        <input onChange={(e) => setPokemonQuery(e.target.value)} />
        <button>Get pokemon</button>
      </form>
      {/* Make a PokemonList component to import and use here. Use a ternery to display a loading spinner (make a <Spinner /> component for this) if the data is still loading. */}
      <header className="app-header">
        {loadingSpinner ? (
          <LoadingSpinner />
        ) : (
          pokemon.map(
            ({ pokemon, height, weight, hp, shape, type_1, type_2, ability_1, url_image }, i) => (
              <div className="pokemon" key={pokemon + i}>
                <h3>Name: {pokemon}</h3>
                <p>Height: {height}</p>
                <p>Weight: {weight}</p>
                <p>Health: {hp}</p>
                <p>Shape: {shape}</p>
                <p>Type 1: {type_1}</p>
                <p>Type 2: {type_2}</p>
                <p>Ability 1: {ability_1}</p>
                <img src={url_image} />
              </div>
            )
          )
        )}
      </header>
    </section>
  );
}
