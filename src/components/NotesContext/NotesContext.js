import React, { createContext, useState, useEffect, useContext } from 'react';

const NoteContext = createContext()

export const NotesProvider = ({children})=>{

    const [notes, setNotes] = useState(()=>{
        const savedNotes = localStorage.getItem("savedNotes")
        return savedNotes ? JSON.parse(savedNotes) : []
    })


    useEffect(() => {
        localStorage.setItem("savedNotes", JSON.stringify(notes));
    }, [notes]);

    return (
            <NoteContext.Provider value={{ notes, setNotes }}>
                {children}
            </NoteContext.Provider>
        );
    };

    export const useNotes = () => useContext(NoteContext);