import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./Css/dark.css";
import Landing from "./Pages/Landing";
import Projectinfo from "./Pages/Projectinfo";
import { projects } from "./Data";
import Initial from "./Items/Initial";
import "./Css/Queries.css";

function App() {

  function dynamicInitial(e){
    const scalefactor = 1 / 10
    const initials = document.querySelectorAll('.initial')
    const x = e.clientX * scalefactor
    const y = e.clientY * scalefactor
    const rot = e.clientX / 5

    for (let i = 0; i < initials.length; ++i){
      const isOdd = i % 2 !== 0
      const boolInt = isOdd ? -1: 1
      initials[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px) rotate(${rot}deg)`   
  }
  }

  return (
    <Router>
      <div className="body" onMouseMove={dynamicInitial}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/project/:id"
            element={<Projectinfo projects={projects} />}
          />
        </Routes>
        <Initial />
      </div>
    </Router>
  );
}

export default App;
