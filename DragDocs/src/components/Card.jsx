import React from 'react'
import { BiCollapseAlt } from "react-icons/bi";
import { RiEdit2Line } from "react-icons/ri";
import { motion } from 'framer-motion'

function Card({ dragNotes, tagcolor, reference, handleDeleteNotes, index, handleEditNotes }) {

  return (
    <>
      <motion.div
        drag
        dragConstraints={reference}
        whileDrag={{ scale: 1.05 }}
        dragElastic={0.1}
        dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
        className='relative flex-shrink-0 w-60 h-72 rounded-[13px] bg-zinc-900/80 text-white px-3 py-4 overflow-hidden max-h-[500px]'>
        <div className={`w-full h-[6px] absolute left-0 top-0 flex
         ${tagcolor === "blue" ?
            "bg-blue-400" :
            tagcolor === "green" ?
              "bg-green-400" :
              tagcolor === "red" ?
                "bg-red-400" :
                tagcolor === "amber" ?
                  "bg-amber-400" :
                  tagcolor === "orange" ?
                    "bg-orange-400" :
                    tagcolor === "yellow" ?
                      "bg-yellow-400" :
                      tagcolor === "lime" ?
                        "bg-lime-400" :
                        tagcolor === "teal" ?
                          "bg-teal-400" :
                          tagcolor === "cyan" ?
                            "bg-cyan-400" :
                            tagcolor === "sky" ?
                              "bg-sky-400" :
                              tagcolor === "indigo" ?
                                "bg-indigo-400" :
                                tagcolor === "violet" ?
                                  "bg-violet-400" :
                                  tagcolor === "emerald" ?
                                    "bg-emerald-400" :
                                    tagcolor === "purple" ?
                                      "bg-purple-400" :
                                      tagcolor === "fuchsia" ?
                                        "bg-fuchsia-100" :
                                        tagcolor === "pink" ?
                                          "bg-pink-400" :
                                          "bg-rose-400"
          }`}>
          <div>
            <button className='absolute right-2 top-3 rounded-full bg-zinc-600 rounded-full h-6 w-6 flex items-center content-center justify-center hover:text-rose-500 hover:bg-rose-200' onClick={() => { handleDeleteNotes(index) }}><BiCollapseAlt /></button>
            <button className='bg-zinc-600 rounded-full h-6 w-6 flex items-center content-center justify-center hover:text-blue-500 hover:bg-sky-200 absolute right-10 text-lg top-3 rounded-full' onClick={() => { handleEditNotes(index) }}><RiEdit2Line /></button>
          </div>

        </div>
        <p className='text-[15px] leading-tighter tracking-wide mt-5'>
          {dragNotes}
        </p>
      </motion.div >
     
    </>
  )
}

export default Card