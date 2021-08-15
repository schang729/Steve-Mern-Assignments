import './App.css';
import React, { useState } from 'react';

import { Router } from "@reach/router";
import Main from '../src/views/Main';
import EditProduct from './components/EditProduct';
import DisplaySingleProduct from './components/DisplaySingleProduct';


function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <EditProduct path="/:productId/edit"/>
        <DisplaySingleProduct path="/:productId"/>



      </Router>

    </div>
  );
}

export default App;
