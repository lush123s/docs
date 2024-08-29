import React from 'react'

const Background = () => {
  return (
   <>
   <div className="cont w-full h-screen fixed z-[1]">
    <div className="nav absolute w-full py-8 font-semibold text-xl flex justify-center">Documents.</div>
    <div className="docs absolute top-1/2 left-1/2 -translate-y-[50%]  -translate-x-[50%] font-semibold text-[150px] tracking-tighter">Docs</div>
    </div>
   </>
  )
}

export default Background
