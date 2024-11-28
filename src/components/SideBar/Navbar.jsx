import { Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

export const NavBar = () => {

    return (
        <>
            <nav className="flex justify-center items-center mt-2 border-r-2 border-gray-200">
                <ul className="text-center flex">
                    <Link to="/" className="p-2 mx-2 text-lg border-b border-blue-600">Inicio</Link>
                    <Link to="/help" className="p-2 mx-2 text-lg border-b border-blue-600">Ayuda</Link>
                </ul>
            </nav>
        </>
    );
};