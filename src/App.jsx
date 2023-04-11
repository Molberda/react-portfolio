import "./App.css";
import Nav from "./Components/Nav";
import Showcase from "./Components/Showcase";

function App() {
  return (
    <section id="Landing">
      <div className="container container__landing">
        <div className="row row__landing">
          <Nav/>
          <Showcase/>
        </div>
      </div>
    </section>
  );
}

export default App;
