import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import './Css/dark.css'
import Landing from "./Pages/Landing";
import Projectinfo from "./Pages/Projectinfo";
import { projects } from "./Data";
import './Css/Queries.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/project/:id" element={<Projectinfo projects={projects}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
