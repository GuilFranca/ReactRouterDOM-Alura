import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import Menu from "./components/Menu";
import Footer from "components/Footer";
import DefaultPage from "components/DefaultPage";
import Post from "pages/Post";

function AppRoutes() {
  return (
    <BrowserRouter>

      <Menu />

      <Routes>

        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Home />} />
          <Route path="sobre-mim" element={<AboutMe />} />
          <Route path="post/:id" element={<Post />} />
        </Route>

        {/* 

          Na rota "/", a estrutura a ser renderizada é:

          <DefaultPage>
            <Home />
          </DefaultPage>

          Na rota "sobre-mim", a estrutura a ser renderizada é:

          <DefaultPage>
            <AboutMe />
          </DefaultPage>

         */}

        <Route path="*" element={<div>Página não encontrada</div>} />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default AppRoutes;
