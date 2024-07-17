import React, { useState } from 'react'

const NoteInput = (props) => {
    const { handleAddNotes, Note, setNote } = props;
    return (
        <header>
            <textarea className=' text-gray-900  text-base tracking-wide rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus w-60 h-64' placeholder='Enter todo...' value={Note} onChange={(e) => {
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