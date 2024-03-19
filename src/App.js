import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col } from 'antd';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import { getPokemon } from './api';
import { getPokemonsWithDetails } from './actions';
import './App.css';
import logo from './statics/logo.svg';

function App() {
  
  const pokemons = useSelector(state => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() =>{
    const fetchPokemons = async() => {
      const pokemonsRes = await getPokemon()
      dispatch(getPokemonsWithDetails(pokemonsRes))
    };
    fetchPokemons()
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
      <img src={logo} alt='Pokedux'/>
      </Col>
      <Col span={8} offset={8}>
      <Searcher />
      </Col>
      <PokemonList 
      pokemons={pokemons}
      />
      
    </div>
  );
}

export default App;
