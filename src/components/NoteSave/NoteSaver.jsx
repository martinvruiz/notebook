import { useState, useEffect } from "react"

export const NoteSaver = ()=>{

const [note, setNote] = useState('')
const [notes, setNotes] = useState([])

useEffect(()=>{
    const storedData = JSON.parse(localStorage.getItem("savedNotes")) || []
    setNotes(storedData)
},[])

const handleNote = (e)=>{
setNote(e.target.value)
}

const handleSubmit = (e)=>{
    e.preventDefault()

    if(note === ""){
        console.log("No hay datos")
        return
    }else{
        const newNote = {id: Date.now(), value: note}
        const newNotes = [...notes, newNote]
        setNotes(newNotes)
        localStorage.setItem("savedNotes", JSON.stringify(newNotes))
        setNote('')
}}




    return <>
    
        <form action="note" className=" my-2 p-2 flex flex-col gap-3 w-full items-center">
            <input type="text" placeholder="Ingrese su nota!" onChange={handleNote} maxLength="50" className="border border-blue-600 focus:border-4 focus:outline-none text-center w-2/5 h-1/5 rounded-xl min-h-full"/>
            <button type="submit" onClick={handleSubmit} className="relative p-3 w-1/5 block text-white bg-blue-600 rounded-lg hover:bg-blue-800">Guardar nota</button>
        </form>
        <div className="mt-4 p-4 w-full">
            <h3 className="text-center text-xl mt-8 p-2">
                Tus ultimas notas
            </h3>
            <ul className="flex justify-center">
            {
            notes.slice(-3).map((note) => (
                <li
                    key={note.id}
                    className="p-4 m-2 border-2 border-blue-600 text-center rounded-xl"
                >
                    <h4 className="text-xs">Nota N: {note.id}</h4>
                    <p className="text-xl">{note.value}</p>
                </li>
            ))}
        </ul>
        </div>
    </>
}