import { Dispatch, SetStateAction, createContext } from "react";7
import { Pokemon } from "../types/PokemonTypes";

type GlobalContent = {
    pokemonList: Pokemon[],
    setPokemonList: Dispatch<SetStateAction<never[]>>,
}

const PokemonContext = createContext<GlobalContent>({
    pokemonList: [],
    setPokemonList: () => {[]},
});

export default PokemonContext;