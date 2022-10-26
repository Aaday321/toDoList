import React, { useEffect } from 'react'
import { motion } from "framer-motion"


export default function Card(props) {

  useEffect(()=>console.log(props),[])

    const {note, _id, myId, deleteMe} = props

  return (
      <motion.div
        className='card'
        initial={{opacity:0, x:-800}}
        animate={{opacity:1, x:0}}
        exit={{opacity:0, x:-800}}
        key={myId}
      >
          <div>{note}</div>
          <button onClick={()=>deleteMe(_id)}>DELETE</button>
      </motion.div>
  )
}