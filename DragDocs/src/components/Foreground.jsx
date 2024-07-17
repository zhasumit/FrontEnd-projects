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

    const [dragNotes, setDragNotes] = useState([])
    const [Note, setNote] = useState("")

    function handleAddNotes(newNote) {
        const newNoteList = [...dragNotes, newNote];
        setDragNotes(newNoteList);
    }

    function handleDeleteNotes(index) {
        const newNotesList = dragNotes.filter((note, noteIndex) => {
            return noteIndex !== index;
        })
        setDragNotes(newNotesList);
    }

    function handleEditNotes(index) {
        const noteToBeEdited = dragNotes[index]
        setNote(noteToBeEdited)
        handleDeleteNotes(index)
    }

    return (
        <div ref={ref} className='fixed p-3 top-0 left-0 z-[3] w-full h-full flex gap-3.5 flex-wrap'>
            <NoteInput handleAddNotes={handleAddNotes} Note={Note} setNote={setNote} />
            {dragNotes.map((item, index) => (
                <Card dragNotes={item} tagcolor={getColor()} reference={ref} index={index} handleDeleteNotes={handleDeleteNotes} handleEditNotes={handleEditNotes}/>
            ))}
        </div>
    )
}

export default Foreground