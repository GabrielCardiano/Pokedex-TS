import { ReactElement, useEffect, useMemo, useState } from 'react';
import PokemonContext from './PokemonContext';
import { POKE_URL } from '../services/fetchPokemon';

type Props = {
    children: ReactElement,
}

function PokemonProvider({ children }: Props) {
    const [pokemonList, setPokemonList] = useState([]);

    async function fetchPokemon(url: string): Promise<void> {
        const result = await fetch(url);
        const jsonResult = await result.json();

        setPokemonList(jsonResult.results);
    }

    useEffect(() => {
        fetchPokemon(POKE_URL);
    }, [])


    const values = useMemo(() => ({
        pokemonList, setPokemonList,
    }), [pokemonList, setPokemonList])

    return (
        <PokemonContext.Provider value={values}>
            {children}
        </PokemonContext.Provider>
    );
}

export default PokemonProvider;