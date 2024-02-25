import HomePage from "./Pages/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Reports from "./components/Reports/Reports";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/reports' element={<Reports />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
