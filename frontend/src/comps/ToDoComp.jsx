
import React from 'react'

export default function ToDoComp(props) {

    const {note, _id, deleteMe} = props


  return (
    <li className='card'>
        <div>{note}</div>
        <button onClick={()=>deleteMe(_id)}>DELETE</button>
    </li>
  )
}