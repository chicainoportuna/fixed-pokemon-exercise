import React, { Component } from "react";
import PokemonCard from "./PokemonCard";
import "./PokemonList.css";

class PokemonList extends Component {
  render() {
    const pokemon = this.props.pokemon;
  
    return (
      <section>
        <ul className="pokemon-list">
          {pokemon.map(pok => {
            return (
            <li>
              <PokemonCard pok={pok} />
            </li>
          );
          })}
        </ul>
      </section>
    );
  }
}

export default PokemonList;
