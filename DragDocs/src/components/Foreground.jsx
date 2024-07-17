import React, { useRef, useState } from 'react'
import Card from './Card'
import NoteInput from './NoteInput';

const Foreground = () => {
    const ref = useRef(null);

    function getColor() {
        let colors = (['red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emrald', 'teal', 'cyan', 'sky', 'Blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'])
        const randomIndex = Math.floor(Math.random() * colors.length + 1);
        return colors[randomIndex];
    }

    const [data, setData] = useState(["Note1", "Note2", "Three", "Four"])

    function handleAddNotes(newNote) {
        const newNoteList = [...data, newNote];
        setData(newNoteList);
    }

    function handleDeleteNotes(index) {
        const newNotesList = data.filter((note, noteIndex) => {
            return noteIndex !== index;
        })
        setData(newNotesList);
    }
    function handleEditNotes(index) { }

    return (
        <div ref={ref} className='fixed p-3 top-0 left-0 z-[3] w-full h-full flex gap-3.5 flex-wrap'>
            <NoteInput handleAddNotes={handleAddNotes} />
            {data.map((item, index) => (
                <Card data={item} tagcolor={getColor()} reference={ref} index={index} handleDeleteNotes={handleDeleteNotes} />
            ))}
        </div>
    )
}

export default Foreground