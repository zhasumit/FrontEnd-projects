import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {
    const ref = useRef(null);

    function getColor() {
        let colors = (['red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emrald', 'teal', 'cyan', 'sky', 'Blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'])
        const randomIndex = Math.floor(Math.random() * colors.length + 1);
        return colors[randomIndex];
    }

    const data = [
        {
            desc: "This is a sample note to be checked in the card component that is in a different component altogether",
            tagcolor: getColor(),
        },
        {
            desc: "Note 2",
            tagcolor: getColor(),
        },
        {
            desc: "Note 3",
            tagcolor: getColor(),
        },
    ]

    return (
        <div ref={ref} className='fixed p-3 top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap'>
            {data.map((item, index) => (
                <Card data={item} reference={ref} />
            ))}
        </div>
    )
}

export default Foreground