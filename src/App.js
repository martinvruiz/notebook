import { SideBar } from "./components/SideBar/SideBar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Help } from "./pages/Help";
import { SavedNotes } from "./components/SavedNotes/SavedNotes";


function App() {
  return (
    <BrowserRouter>
    <div className="flex min-h-screen font-roboto">
      <SideBar/>
      <Routes>

        <Route path="/" element={<Home/>}></Route>
        <Route path="/help" element={<Help/>}></Route>
        <Route path="/notes" element={<SavedNotes/>}></Route>

      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
