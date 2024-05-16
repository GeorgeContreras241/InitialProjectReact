import { useState } from "react"


export const Title = () => {
    const [input, setInput] = useState('')
    const [update, setUpdate] = useState('')
    const handleInput = (event) => {
      setInput(event.target.value)
    }
    const onClick = (event) =>{
      event.preventDefault()
      setUpdate(input)
    }
  return (
    <div>
        <input 
        type="text" 
        value={input}
        onChange={handleInput}/>
        <button onClick={onClick}>Cambiar</button>
        <p>texto del input : <strong>{input}</strong></p> 
        <p>texto enviado por el boton: <strong>{update}</strong></p>
    </div>
  )
}
