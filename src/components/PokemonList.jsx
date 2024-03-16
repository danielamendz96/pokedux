import PokemonCard from "./PokemonCard";

import React from 'react';

const PokemonList = ({pokemons}) => {
  return (
    <div className='pokemonList'>
        {pokemons.map((pokemon) => {
            return <PokemonCard />;
        })}
    </div>
  );
}

PokemonList.defaultProps = {
    pokemons: Array(10).fill(''),
}

export default PokemonList;
