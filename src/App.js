import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import Inicio from './components/Inicio';
import Bla from './components/Bla';
import Parametros from './components/Parametros';
import User from './components/User';
import Contacto from "./components/Contacto"
import Nosotros from "./components/Nosotros"

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <div className="btn-group">
          <Link to="/" className="btn btn-dark">Inicio</Link>
          <Link to="/bla" className="btn btn-dark">Bla bla bla</Link>
          <NavLink to="/user" className={({isActive}) => isActive ? "btn btn-danger" : "btn btn-dark" }>Users</NavLink>
        </div>
        <hr />
        <Routes>
          <Route path="/" exact element={<Inicio></Inicio>}>
          </Route>
          <Route path="/bla" exact element={<Bla></Bla>}>
          </Route>
          <Route path="/contacto" exact element={<Contacto></Contacto>}>
          </Route>
          <Route path="/nosotros" exact element={<Nosotros></Nosotros>}>
          </Route>
          <Route path="/user" exact element={<Parametros></Parametros>}>
          </Route>
          <Route path="/user" exact element={<User></User>}>
          </Route>

          
        </Routes>
      </div>
    </Router>
  );
}

export default App;