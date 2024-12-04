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




    return <div className="flex w-full flex-col items-center">
    
        <form action="note" onSubmit={handleSubmit} className=" my-2 p-2 flex flex-col gap-3 w-full items-center text-black">
            <select name="color-note" id="color-note" value={noteColor} onChange={handleColorChange} className="p-2 border-2 border-green-800 rounded-lg">
                <option value="border-blue-600">Azul</option>
                <option value="border-violet-600">Violeta</option>
                <option value="border-pink-600">Rosa</option>
                <option value="border-red-600">Rojo</option>
                <option value="border-gray-600">Gris</option>
            </select>
            <input type="text" placeholder="Ingrese su nota!" onChange={handleNote} maxLength="50" className="border-2 border-green-800 focus:border-4 focus:outline-none text-center w-2/4 rounded-xl min-h-24"/>
            <button type="submit" className="relative p-3 block text-white border bg-green-700 rounded-lg hover:bg-green-900">Guardar nota</button>
        </form>
        <div className="mt-4 flex flex-col items-center p-4">
            <h3 className="text-center text-xl p-2">
                Tus ultimas notas
            </h3>
            <ul className="flex flex-col lg:flex-row justify-center w-3/4">
            {
            notes.slice(-3).map((note) => (
                <li
                    key={note.id}
                    className={`p-4 m-2 border-4 ${note.color} text-center bg-white text-black rounded-xl`} 
                >
                    <h4 className="text-xs">Nota N: {note.id}</h4>
                    <p className="text-xl break-words">{note.value}</p>
                </li>
            ))}
        </ul>
        </div>
    </div>
}