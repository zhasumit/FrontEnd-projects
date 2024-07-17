import React from 'react'
import { MdOutlineCloseFullscreen } from "react-icons/md";
import { motion } from 'framer-motion'

function Card({ data, reference }) {
  function getColor() {
    let colors = (['gray', 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emrald', 'teal', 'cyan', 'sky', 'Blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'])
    const randomIndex = Math.floor(Math.random() * colors.length + 1);
    return colors[randomIndex];
  }

  return (
    <>
      <motion.div
        drag
        dragConstraints={reference}
        whileDrag={{ scale: 1.05 }}
        dragElastic={0.1}
        dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
        className='relative flex-shrink-0 w-60 h-72 rounded-[13px] bg-zinc-900/80 text-white px-3 py-4 overflow-hidden'>
        <div className={`w-full h-[6px] absolute left-0 top-0 flex
         ${data.tagcolor === "blue" ?
            "bg-blue-400" :
            data.tagcolor === "green" ?
              "bg-green-400" :
              data.tagcolor === "red" ?
                "bg-red-400" :
                data.tagcolor === "amber" ?
                  "bg-amber-400" :
                  data.tagcolor === "orange" ?
                    "bg-orange-400" :
                    data.tagcolor === "yellow" ?
                      "bg-yellow-400" :
                      data.tagcolor === "lime" ?
                        "bg-lime-400" :
                        data.tagcolor === "teal" ?
                          "bg-teal-400" :
                          data.tagcolor === "cyan" ?
                            "bg-cyan-400" :
                            data.tagcolor === "sky" ?
                              "bg-sky-400" :
                              data.tagcolor === "indigo" ?
                                "bg-indigo-400" :
                                data.tagcolor === "violet" ?
                                  "bg-violet-400" :
                                  data.tagcolor === "emerald" ?
                                    "bg-emerald-400" :
                                    data.tagcolor === "purple" ?
                                      "bg-purple-400" :
                                      data.tagcolor === "fuchsia" ?
                                        "bg-fuchsia-100" :
                                        data.tagcolor === "pink" ?
                                          "bg-pink-400" :
                                          "bg-rose-400"
          }`}>
          <div className='absolute right-2 top-3 bg-zinc-600 rounded-full h-6 w-6 flex items-center content-center justify-center'>
            <span className='rounded-full'><MdOutlineCloseFullscreen /></span>
          </div>
        </div>
        <p className='text-[15px] leading-tighter tracking-wide mt-5'>
          {data.desc}
        </p>
      </motion.div >
    </>
  )
}

export default Card