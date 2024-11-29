
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
        <div className="flex flex-col items-center w-full my-2">
            <h1 className="my-2 p-2 lg:text-2xl font-semibold">Tus notas</h1>
            <p className="text-center">Aca podes encontrar tus notas guardadas!</p>
            <ul className=" my-2 py-2 flex flex-wrap justify-center w-5/6">
            {notes.map((note)=>(
                <li key={note.id} className={`p-4 m-2 border-4 ${note.color} text-center rounded-xl`}>
                    <h4 className="text-xs">Nota N: {note.id}</h4>
                    <p className="text-xl">{note.value}</p>
                    <button onClick={()=>btnDelete(note.id)} className="text-xs text-red-600 p-1 m-1 border border-red-600 rounded-md">Eliminar</button>

                </li>
                
            ))
                }
            </ul>
        </div>
    </>
}