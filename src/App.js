import React, { Component } from "react";
import pokemon from "./data/pokemonsData";
import PokemonList from "./components/PokemonList";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      pokemonData: pokemon
    };
  }

  render() {
    return (
      <main>
        <h1 className="main-title">Mi lista de pokemon</h1>

        <PokemonList pokemon={this.state.pokemonData} />
      </main>
    );
  }
}

export default App;

