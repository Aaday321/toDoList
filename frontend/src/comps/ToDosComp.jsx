
import React from 'react'
import ToDoComp from './ToDoComp'

function ToDosComp({state, deleteMe}) {
  return (
    <>
        <ul className='full-list'>
            {state.length>0 && state.map((i)=><ToDoComp key={i._id || i.myId} note={i.note} _id={i._id} deleteMe={deleteMe}/>) }
        </ul>
    </>
  )
}

export default ToDosComp