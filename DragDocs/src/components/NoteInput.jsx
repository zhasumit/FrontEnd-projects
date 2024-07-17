import React, { useState } from 'react'

const NoteInput = (props) => {
    const { handleAddNotes, Note, setNote } = props;
    return (
        <header>
            <textarea className='text-base tracking-wide rounded-lg block p-2 bg-gray-700 placeholder-gray-400 text-white w-60 h-64 border-none' placeholder='Add some notes ✏️...' value={Note} onChange={(e) => {
                if (e.target.value != "")
                    setNote(e.target.value)
            }} />
            <button className='bg-sky-200 p-.5 px-4 rounded-sm w-full' onClick={() => {
                handleAddNotes(Note)
                setNote("")
            }}>Add</button>
        </header>
    )
}

export default NoteInput