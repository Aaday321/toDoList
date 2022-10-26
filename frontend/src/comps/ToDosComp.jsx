
import React from 'react'
import { AnimatePresence } from 'framer-motion'
import Card from './Card'

function ToDosComp({state, deleteMe}) {
  return (
      <div className='full-list'>
        <AnimatePresence >
          {state.length>0 && state.map((i)=><Card key={i._id || i.myId} aniKey={i.myId} note={i.note} _id={i._id} deleteMe={deleteMe}/>) }
          </AnimatePresence>
      </div>
  )
}

export default ToDosComp