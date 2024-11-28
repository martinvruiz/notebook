import React, { createContext, useState, useEffect, useContext } from 'react';

const NoteContext = createContext()

export const NotesProvider = ({children})=>{

    const [notes, setNotes] = useState([])

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem("savedNotes")) || [];
        setNotes(savedNotes);
    }, []);

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