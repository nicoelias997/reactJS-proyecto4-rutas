import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {

  const {id} = useParams()
  const [pueblo, setPueblo] = React.useState([])

  React.useEffect(()=>{
    const obtenerDatos = async () => {
      const data =  await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations/:${id}`)
      const users = await data.json()
      setPueblo(users)
     }
    obtenerDatos()
  }, [id])

  
  return (
    <div>
        <h3>
          {pueblo.name}
        </h3>
        <p>
          {pueblo.team_bonus}
        </p>
    </div>
  )
}

export default User