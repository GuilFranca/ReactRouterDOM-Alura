import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import Menu from "./components/Menu";
import Footer from "components/Footer";
import DefaultPage from "components/DefaultPage";
import Post from "pages/Post";
import NotFound from "pages/NotFound";
import ScrollToTop from "components/ScrollToTop";

function AppRoutes() {
  return (
    <BrowserRouter>
    
      <ScrollToTop />
      <Menu />

      <Routes>

        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Home />} />
          <Route path="sobre-mim" element={<AboutMe />} />
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

        <Route path="post/:id/*" element={<Post />} />
        <Route path="*" element={<NotFound />} />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default AppRoutes;
