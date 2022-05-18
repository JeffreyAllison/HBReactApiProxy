import React from 'react';

export default function PokemonList({ pokemon }) {
  return (
    <div>
      {pokemon.map(
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
      )}
    </div>
  );
}
