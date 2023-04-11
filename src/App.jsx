import "./App.css";
import Footer from "./Items/Footer";
import Links from "./Items/Links";
import Personal from "./Items/Personal";
import Project from "./Items/Project";

function App() {
  return (
    <section id="Landing">
      <div className="container container__landing">
        <div className="row row__landing">
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
            <Project/>
            <Project/>
            <Project/>
            <Project/>
            <Project/>
            <Project/>
            <Project/>
            <Project/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
