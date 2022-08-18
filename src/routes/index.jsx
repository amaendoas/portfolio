import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Stack } from "../pages/Stack";
import { Projects } from "../pages/Projects"
import { Contact } from "../pages/Contact";

export function AppRoutes() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/stack" element={<Stack/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  )
}