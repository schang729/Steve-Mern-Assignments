import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
      axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
          .then(response=>{setPokemon(response.data.results)})
          .catch((err)=> {console.log(err);})
          

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
