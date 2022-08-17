import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";

export function AppRoutes() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}