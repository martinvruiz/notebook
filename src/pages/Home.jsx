import { NoteSaver } from "../components/NoteSave/NoteSaver"
import { SavedNotes } from "../components/SavedNotes/SavedNotes"
import 'react-toastify/dist/ReactToastify.css';



export const Home = ()=>{


    return <div className="w-full flex flex-col items-center">
    
        <h1 className="text-center text-xl lg:text-2xl font-semibold p-2 my-2">Bienvenido/a a Notebook</h1>
        <p className="p-1 text-center">Aqui podra guardar en notas sus asuntos importantes, recordatorios, citas, etc</p>
        <NoteSaver/>
        <SavedNotes/>
    </div>
}