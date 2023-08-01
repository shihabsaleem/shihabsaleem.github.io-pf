import "./App.css";
import About from "./Components/About";
import Header from "./Components/Header";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
      </main>
    </>
  );
}

export default App;
