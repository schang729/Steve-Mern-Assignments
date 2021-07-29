import { Router } from "@reach/router";
import './App.css';
import Home from "./components/home";
import Number from "./components/number";
import Word from "./components/word";

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home" />
        <Number path="/:int"/>
        <Word path="/word/:word/:wordColor/:color"/>


      </Router>
      
    </div>
  );
}

export default App;
