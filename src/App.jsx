import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import PokemonDetail from "./pages/PokemonDetail";
import ProtectedRoutes from "./components/ProtectedRoutes";
import backgroundImage from "/images/pokemon.jpg";

function App() {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundAttachment: "fixed",
    minHeight: "100vh",
    
  };

  return (
    <div style={backgroundStyle}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokedex/:id" element={<PokemonDetail />} />
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
