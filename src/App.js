import { NavBar } from "./components/NavBar/Navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Help } from "./pages/Help";
import 'react-toastify/dist/ReactToastify.css';
import { NotesProvider } from "./components/NotesContext/NotesContext";
import { ToastContainer } from "react-toastify";



function App() {
  return (
    <NotesProvider>
      <BrowserRouter>
      <div className="flex flex-col items-center min-h-screen font-roboto bg-lightGreen text-white">
        <NavBar/>
        <Routes>

          <Route path="/" element={<Home/>}></Route>
          <Route path="/help" element={<Help/>}></Route>

        </Routes>
        <ToastContainer autoClose={2000}/>
        </div>
      </BrowserRouter>
    </NotesProvider>
  );
}

export default App;
