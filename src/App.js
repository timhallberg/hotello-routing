import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Routes } from "react-router-dom";
import "./App.css";
import Routing from "./Components/Utilities/Routing";

function App() {
  return (
    <div className="App">
      <h1>Appsida</h1>

      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/test">Test</Link>

      <Routing />
    </div>
  );
}

export default App;
