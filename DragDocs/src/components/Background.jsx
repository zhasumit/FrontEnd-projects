import React from 'react'
import { SiDungeonsanddragons } from "react-icons/si";

const Background = () => {
    return (
        <div className='fixed z-[2] w-full h-screen'>
            <h1 className='absolute top-1/2 left-1/2 text-[10vw] -translate-x-[50%] -translate-y-[50%] font-semibold text-zinc-900 flex items-center'>Doc<SiDungeonsanddragons /></h1>
        </div>
    )
}

export default Background