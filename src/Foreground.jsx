import React, { useRef, useState } from 'react'
import Card from './Card'
import {motion} from 'framer-motion'

const Foreground = () => {
  const refer = useRef()
  const data = [
    {
      desc:'orem ipsum dolor sit, amet consectetur adipisicing',
      filesize:'0.6mb',
      close : true,
      tag:{color:'green',open:true,title:'Download Now'}
    },
    {
      desc:'orem ipsum dolor sit, amet consectetur adipisicing',
      filesize:'1.6mb',
      close : false,
      tag:{color:'green',open:true,title:'Download Now'}
    },
    {
      desc:'orem ipsum dolor sit, amet consectetur adipisicing',
      filesize:'0.9mb',
      close : true,
      tag:{color:'blue',open:true,title:'Download Now'}
    },
    {
      desc:'orem ipsum dolor sit, amet consectetur adipisicing',
      filesize:'0.9mb',
      close : false,
      tag:{color:'green',open:false,title:'Download Now'}
    },
   
  ]
  return (
    <div ref={refer} className="foreground flex gap-6 flex-wrap p-4 fixed z-[2] h-screen w-full  ">
      {data.map(function(item){
      return  <Card elem={item} referenece = {refer}/>

      })}

    </div>

  )
}

export default Foreground
