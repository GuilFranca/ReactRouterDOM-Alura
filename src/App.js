import AboutMe from "./pages/aboutMe";
import Home from "./pages/home";

console.log(window.location)

const pagina = window.location.pathname === '/' ? <Home /> : <AboutMe />

function App() {
  return pagina;
}

export default App;
