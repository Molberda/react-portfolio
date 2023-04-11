import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Landing from "./Pages/Landing";
import Projectinfo from "./Pages/Projectinfo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/project/:id" element={<Projectinfo/>}/>
      </Routes>
    </Router>
  );
}

export default App;
