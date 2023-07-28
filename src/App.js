import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="#" element={<Home />} />
          <Route path="#about" element={<Home />} />
          <Route path="#portfolio" element={<Home />} />
          <Route path="#contact" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
