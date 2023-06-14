import { ReactElement, useContext } from "react";
import Header from "../components/Header";
import PokemonContext from "../context/PokemonContext";
import { PokemonContainer, PokemonItem } from "./PokemonListCSS";

function PokemonsList(): ReactElement {
    const { pokemonList } = useContext(PokemonContext)

    return (
        <>
            <Header />

            <PokemonContainer className="pokemon-container">
                {pokemonList.map((pokemon) => {
                    const id = pokemon.url.split('/')[6]
                    const indice = ('00' +id).slice(-3);
                    
                    return (
                        <PokemonItem className="pokemon-item" key={id} to={`/pokemon/${id}`}>
                        <p>{indice}</p>
                        <p>{pokemon.name}</p>
                        </PokemonItem>
                        )
                }
                )

                }
            </PokemonContainer>
        </>
    );
}

export default PokemonsList;