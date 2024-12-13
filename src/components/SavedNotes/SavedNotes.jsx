
import {  toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useNotes } from "../NotesContext/NotesContext";

export const SavedNotes = ()=>{

    const {notes, setNotes} = useNotes()

    const handleDelete = (id)=>{
        const updateNotes = notes.filter((e)=>e.id !== id)
        setNotes(updateNotes)
    }

    const btnDelete = (id)=>{
        toast.warning(
            <div className='text-black h-full text-center'>
                <span>
                    <p>
                        ¿Desea eliminar el registro?
                    </p>
                    <p>{id}</p>
                </span>
                <div>
                    <button
                    onClick={() => {
                    handleDelete(id);
                    toast.dismiss()
                    }}
                    className=' bg-black text-white rounded-md my-2 mx-6 px-2'
                    >
                        Sí
                    </button>
                    <button
                    onClick={() => toast.dismiss()}
                    className=' bg-black text-white rounded-md my-2 mx-6 px-2'
                    >
                        No
                    </button>
                </div>
            </div>,
            {
                closeButton: false,
            }
        );
    }; 

    return <>
        <div className="flex flex-col items-center w-full my-4 px-4">
            <h1 className="my-2 text-2xl lg:text-3xl font-bold text-white">Tus notas</h1>
            <p className="text-center text-gray-200 text-lg mb-4">Aca podes encontrar tus notas guardadas!</p>
            <ul className="flex flex-wrap justify-center gap-4 w-full max-w-5xl">
            {notes.map((note)=>(
                <li key={note.id} className={`p-4 w-full sm:w-1/3 md:w-1/4 border-4 ${note.color} bg-white shadow-lg rounded-lg flex flex-col items-center`}>
                    <h4 className="text-sm text-gray-500 mb-2">Nota N: {note.id}</h4>
                    <p className="text-lg text-gray-800 mb-4 h-auto text-center w-full break-words">{note.value}</p>
                    <button onClick={()=>btnDelete(note.id)} className="text-sm text-white bg-red-600 p-2 rounded-md shadow hover:bg-red-700 transition">Eliminar</button>

                </li>
                
            ))
                }
            </ul>
        </div>
    </>
}