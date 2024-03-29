import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import PokemonProvider from './context/PokemonProvider.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <PokemonProvider>
      <App />
    </PokemonProvider>
  </BrowserRouter>,
)
