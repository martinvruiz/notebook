import { useState } from "react"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNotes } from "../NotesContext/NotesContext";

export const NoteSaver = ()=>{

const [note, setNote] = useState('')
const {notes, setNotes} = useNotes()
const [noteColor, setNoteColor] = useState("border-blue-600");



const handleNote = (e)=>{
        setNote(e.target.value)
}

const handleColorChange = (e) => {
    setNoteColor(e.target.value);
};

const handleSubmit = (e)=>{
    e.preventDefault()

    if(note === ""){
        toast.error("Ingrese su nota!")
        console.log("No hay datos")
        return
    }else{
        const newNote = {  
            id: Date.now(),
            value: note, 
            color: noteColor
        }
        const newNotes = [...notes, newNote]
        setNotes(newNotes)
        toast.success("Nota guardada!")
}}




    return <div className="flex w-full flex-col items-center bg-lightGreen p-4">
    
        <form 
            action="note" 
            onSubmit={handleSubmit} 
            className="text-black my-4 p-6 bg-white rounded-xl shadow-lg flex flex-col gap-4 w-full max-w-md items-center">
            <select 
                name="color-note" 
                id="color-note" 
                value={noteColor} 
                onChange={handleColorChange} 
                className="p-3 border-2 border-lightGreen rounded-lg w-full text-gray-700 focus:outline-none focus:ring focus:ring-lightGreen">
                <option value="border-blue-600">Azul</option>
                <option value="border-violet-600">Violeta</option>
                <option value="border-pink-600">Rosa</option>
                <option value="border-red-600">Rojo</option>
                <option value="border-gray-600">Gris</option>
            </select>
            <input 
                type="text" 
                placeholder="Ingrese su nota!" 
                onChange={handleNote} 
                maxLength="50" 
                className="border-2 border-lightGreen focus:border-lightGreen focus:ring focus:ring-lightGreen text-center w-full rounded-xl p-3"/>
            <button 
                type="submit" 
                className="relative p-3 w-full text-white bg-lightGreen rounded-lg shadow-md hover:bg-green-800 transition-all">Guardar nota</button>
        </form>
        <div className="mt-6 flex flex-col items-center w-full">
            <h3 className="text-center text-2xl font-semibold text-white p-2">
                Tus ultimas notas
            </h3>
            <ul className="flex flex-col lg:flex-row justify-center gap-4 w-full max-w-4xl">
            {
            notes.slice(-3).map((note) => (
                <li
                    key={note.id}
                    className={`p-4 border-4 ${note.color} bg-white shadow-md rounded-lg w-full lg:w-1/4`}
                >
                    <h4 className="text-xs text-gray-500">Nota N: {note.id}</h4>
                    <p className="text-lg text-gray-800 break-words">{note.value}</p>
                </li>
            ))}
        </ul>
        </div>
    </div>
}