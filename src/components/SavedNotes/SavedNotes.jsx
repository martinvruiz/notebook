import { useState, useEffect } from "react"

export const SavedNotes = ()=>{

    const [notes, setNotes] = useState([])

    useEffect(()=>{
        const savedNotes = JSON.parse(localStorage.getItem("savedNotes")) || []
        console.log(savedNotes)
        setNotes(savedNotes)
    },[])

    const handleDelete = (id)=>{
        const updateNotes = notes.filter((e)=>e.id !== id)
        setNotes(updateNotes)
        localStorage.setItem("savedNotes", JSON.stringify(updateNotes))
    }

    return <>
        <div className="flex flex-col items-center w-full my-2">
            <h1 className="my-2 p-2 lg:text-2xl font-semibold">Tus notas</h1>
            <p className="text-center">Aca podes encontrar tus notas guardadas!</p>
            <ul className="flex flex-wrap justify-center">
            {notes.map((note)=>(
                <li key={note.id} className="p-4 m-2 border-2 border-blue-600 text-center rounded-xl">
                    <h4 className="text-xs">Nota N: {note.id}</h4>
                    <p className="text-xl">{note.value}</p>
                    <button onClick={()=>handleDelete(note.id)} className="text-xs text-red-600 p-1 m-1 border border-red-600 rounded-md">Eliminar</button>
                </li>
            ))
                }
            </ul>
        </div>
    </>
}