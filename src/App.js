import HomePage from "./Pages/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Reports from "./components/Reports/Reports";
import TableData from "./components/TableData/TableData";
import ProjectList from "./components/ProjectList/ProjectList";
import Login from "./components/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/logout' element={<Login />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/home/:projectId' element={<HomePage />} />

        <Route path='/projects' element={<Projects />} />

        <Route path='/id/projects/:filter' element={<ProjectList />} />
        <Route path='/reports' element={<Reports />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
