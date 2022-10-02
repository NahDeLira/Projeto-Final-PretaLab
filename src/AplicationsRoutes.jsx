import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home"
import Receitas from "./Pages/Receitas/Receitas"
import Contatos from "./Pages/Contatos/Contatos"
import Comentarios from "./Pages/Comentarios/Comentarios"
import Rooter from "../src/Componentes/Cards/Rooter"
import Menu from "../src/Componentes/Menu/Menu"

function AplicationRoutes () {
    return (
    <BrowserRouter>
        <Menu />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/receitas" element={<Receitas />}/>
            <Route path="/comentarios" element={<Comentarios />}/>
            <Route path="/contatos" element={<Contatos />}/>
        </Routes>
        <Rooter />
    </BrowserRouter>
    )
}
export default AplicationRoutes