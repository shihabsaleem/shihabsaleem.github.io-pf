import "./App.css";
import About from "./Components/About";
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
        <Skill />
      </main>
    </>
  );
}

export default App;
