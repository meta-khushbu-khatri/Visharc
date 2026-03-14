import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Techicalsupport from "./Pages/Techicalsupport";

function App() {
  return (
    <BrowserRouter basename="/Visharc">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Techicalsupport" element={<Techicalsupport />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;