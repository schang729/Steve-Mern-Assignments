import './App.css';
import React from 'react';
import { Router } from "@reach/router";
import Main from '../src/views/Main'
import AuthorForm from './components/AuthorForm';
import EditAuthor from './components/EditAuthor';



function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <AuthorForm path="/new"/>
        <EditAuthor path="/:authorId/edit"/>
        



      </Router>
     
    </div>
  );
}

export default App;
