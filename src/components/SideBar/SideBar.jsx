import { Link } from "react-router-dom";

export const SideBar = () => {
    const logo = '/img/logosinbg.png';

    return (
        <>
            <nav className="transition-all duration-200 ease-in-out transform max-w-[100px] hover:max-w-[250px] flex flex-col items-center min-h-screen border-r-2 border-gray-200">
                <img src={logo} alt={logo} className="w-1/3 py-4" />
                <ul className="text-center flex flex-col">
                    <Link to="/" className="py-2">Inicio</Link>
                    <Link to="/notes" className="py-2">Mis notas</Link>
                    <Link to="/help" className="py-2">Ayuda</Link>
                </ul>
            </nav>
        </>
    );
};