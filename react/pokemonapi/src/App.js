import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
      axios.get('https://pokeapi.co/api/v2/pokemon/?limit=808&offset=808')
          .then(response=>{setPokemon(response.data.results)})
          

  }, []);
  
  return (
    <div className="App">
      
      
      {pokemon.map((thisPokemon, index)=>(
       <div key={index}>
       {thisPokemon.name}
       
       </div>



      ))}
     
    </div>
  );
}

export default App;
