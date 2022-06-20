import { useState } from "react"

const Popular = ({data}) => {
    const [popular, setPopular] = useState()
  return (
    <div>
        <img src={popular.image}/>
        <h1>{popular.title}</h1>
        <p>{popular.place}</p>
        <p>{popular.startingDate}</p>
    </div>
  )
}

export default Popular