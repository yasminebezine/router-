import { Route, Routes } from "react-router-dom";
import CategoriePage from "./Pages/CategoriePage";
import ProductPage from "./Pages/ProductPage";
import NavBar from "./Components/NavBar";


function App() {
  return (
    <div className="App">
      <NavBar />
  <Routes>
    <Route element={<CategoriePage/> } path="/categorie" />
    <Route element={<ProductPage />} path="/product" />
  </Routes>
    </div>
  );
}

export default App;
