import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";

import Inicio from './components/Inicio';
import Bla from './components/Bla';
import User from './components/User';
import Contacto from "./components/Contacto"
import Nosotros from "./components/Nosotros"

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <div className="btn-group">
          <NavLink to="/" className={({isActive}) => isActive ? "btn btn-danger" : "btn btn-dark" }>Inicio</NavLink>
          <NavLink to="/bla" className={({isActive}) => isActive ? "btn btn-danger" : "btn btn-dark" }>Bla bla bla</NavLink>
          <NavLink to="/nosotros" className={({isActive}) => isActive ? "btn btn-danger" : "btn btn-dark" }>Nosotros</NavLink>
          <NavLink to="/contacto" className={({isActive}) => isActive ? "btn btn-danger" : "btn btn-dark" }>Contacto</NavLink>
          <NavLink to="/user" className={({isActive}) => isActive ? "btn btn-danger" : "btn btn-dark" }>Users</NavLink>
          
        </div>
        <hr />
        <Routes>
          <Route path="/nosotros/:id" element={<User></User>}>
          </Route>
          <Route path="/" exact element={<Inicio></Inicio>}>
          </Route>
          <Route path="/bla" exact element={<Bla></Bla>}>
          </Route>
          <Route path="/contacto" exact element={<Contacto></Contacto>}>
          </Route>
          <Route path="/nosotros" exact element={<Nosotros></Nosotros>}>
          </Route>
                          
        </Routes>
      </div>
    </Router>
  );
}

export default App;