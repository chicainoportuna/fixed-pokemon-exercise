import React, { Component } from "react";
import "./PokemonCard.css";

class PokemonCard extends Component {
  render() {
    const { pok: pokemon } = this.props;
    return (
      <div class="card">
        <div
          class="card__photo"
          style={{ backgroundImage: `url(${pokemon.url})` }}
        />
        <h2 class="card__name">{pokemon.name}</h2>
        <ul class="card__type">
          {pokemon.types.map(type => (
            <li class="card__type--item" key={type}>
              {type}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PokemonCard;
