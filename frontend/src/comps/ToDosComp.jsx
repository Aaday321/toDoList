
import React from 'react'
import ToDoComp from './ToDoComp'

function ToDosComp({state, deleteMe}) {
  return (
    <>
        <ul className='full-list'>
            {state.length>0 && state.map((i)=><ToDoComp key={i.id} note={i.note} id={i.id} deleteMe={deleteMe}/>) }
        </ul>
    </>
  )
}

export default ToDosComp