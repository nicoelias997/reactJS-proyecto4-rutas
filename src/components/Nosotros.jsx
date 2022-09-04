import React from 'react'
import {
  NavLink
} from "react-router-dom";

const Nosotros = () => {

  const [equipo, setEquipo] = React.useState([])

  React.useEffect(()=>{
    obtenerDatos()
  }, [])

  const obtenerDatos = async () => {
   const data =  await fetch("https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations")
   const users = await data.json()
   setEquipo(users.civilizations)
  }

  return (
    <div>
        <h1>Nostros</h1>
        <ul>
          {
            equipo.map(item => (
              
              <li key={item.id}>
                <NavLink to={`/nosotros/${item.id}`}>
                {item.name} - {item.expansion}
                </NavLink>
              </li>
            ))
          }
        </ul>
    </div>
  )
}

export default Nosotros