import { NavBar } from "./components/SideBar/Navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Help } from "./pages/Help";
import 'react-toastify/dist/ReactToastify.css';
import { NotesProvider } from "./components/NotesContext/NotesContext";



function App() {
  return (
    <NotesProvider>
      <BrowserRouter>
      <div className="flex flex-col min-h-screen font-roboto">
        <NavBar/>
        <Routes>

          <Route path="/" element={<Home/>}></Route>
          <Route path="/help" element={<Help/>}></Route>

        </Routes>
        </div>
      </BrowserRouter>
    </NotesProvider>
  );
}

export default App;
