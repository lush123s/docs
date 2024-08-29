import React from 'react'
import { LuFileSpreadsheet } from "react-icons/lu";
import { MdDownload } from "react-icons/md";
import { IoIosClose } from "react-icons/io";

import {motion} from 'framer-motion'
const Card = ({elem,referenece}) => {
  return (
    <motion.div drag dragConstraints={referenece} className="card relative w-48 rounded-[28px] h-60 bg-zinc-900 overflow-hidden text-white p-5">
       <LuFileSpreadsheet/>
       <p className='mt-2 text-sm  '>{elem.desc}.</p>
       <div className="footer absolute bottom-0 left-0  w-full  ">
        <div className="first px-5 py-2 items-center flex justify-between mb-2">
         
            <h5>{elem.filesize}</h5>
            {elem.close ? <IoIosClose />:<MdDownload/>}
        </div>
        {elem.tag.open? <div className={`tag w-full ${elem.tag.color === 'blue'?'bg-blue-600':'bg-green-600'} text-sm font-semibold p-2 text-center`}>
          <h1>{elem.tag.title}</h1>
        </div>:''}
       
       </div>
     </motion.div>
  )
}

export default Card
