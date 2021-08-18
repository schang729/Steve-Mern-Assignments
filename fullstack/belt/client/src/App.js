
import './App.css';
import React from 'react';
import { Router } from "@reach/router";
import Main from './views/Main';
import PetForm from './components/PetForm';
import EditPet from './components/EditPet';
import DisplayOnePet from './components/DisplayOnePet';



function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <PetForm path="/pets/new"/>
        <EditPet path="/pets/:petId/edit"/>
        <DisplayOnePet path="/pets/:petId" />




      </Router>

    </div>
  );
}

export default App;
