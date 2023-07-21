import { useState } from 'react'

import './App.css'

function App() {
  const [text, setText] = useState("")
  const handleInput = (e) => setText(e.target.value)

  return (
    <>
      <img data-testid="max" src="https://www.shutterstock.com/image-vector/graffiti-max-word-sprayed-black-600w-1516720772.jpg"
        alt="Max" />
      <div>
        <input type="text" onChange={handleInput} placeholder="type your name" />
        <h1>Hello {text}</h1>
      </div>
    </>
  )
}

export default App
