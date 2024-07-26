import { Routes, Route } from "react-router-dom";
import { AllProducts } from "./page/AllProducts";
import { SelectedProduct } from "./page/SelectedProduct";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AllProducts />} />
        <Route path="/:productId" element={<SelectedProduct />} />
      </Routes>
    </div>
  );
}

export default App;
