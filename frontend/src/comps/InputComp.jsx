import React, {useState} from 'react'

export default function InputComp({addToDos}) {
  const [text, setText] = useState("")

  const handleChange = (e) =>{
    setText(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    addToDos(text);
    setText("");
  }

  return (
    <form className='form' onSubmit={(e)=>handleSubmit(e)}>
      <input
        value={text}
        onChange={(e)=>handleChange(e)}
        type="text" />

      <button>+</button>
    </form>
  )
}