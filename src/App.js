import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./pages/aboutMe";
import Home from "./pages/home";
import Menu from "./components/Menu";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="sobre-mim" element={<AboutMe />} />
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
