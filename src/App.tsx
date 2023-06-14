import { ReactElement } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import PokemonsList from './pages/PokemonsList'

function App(): ReactElement {

  return (
    <Routes>
      <Route path='/' element={ <PokemonsList />} />
    </Routes>
  )
}

export default App
