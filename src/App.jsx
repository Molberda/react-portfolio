import "./App.css";
import Footer from "./Components/Footer";
import Links from "./Components/Links";
import Personal from "./Components/Personal";
import Project from "./Components/Project";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="info__container">
            <Personal/>
            <Links/>
            <Footer/>
          </div>
          <div className="projects__group">
            <Project/>
            <Project/>
            <Project/>
            <Project/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
