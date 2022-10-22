
import React from 'react'

export default function ToDoComp(props) {

    const {note, id, deleteMe} = props


  return (
    <li className='card'>
        <div>{note}</div>
        <button onClick={()=>deleteMe(id)}>DELETE</button>
    </li>
  )
}