import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Skill from "./Components/Skills";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Education />
        <Skill />
        <Contact />
      </main>
    </>
  );
}

export default App;
