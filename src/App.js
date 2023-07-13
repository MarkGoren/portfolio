import "./App.css";
import MatrixRain from "./animations/matrix";
import MatrixAnimation from "./animations/matrix";
import Navbar from "./components/navbar";
import Start from "./components/start";

function App() {
  return (
    <div className="App">
      <MatrixRain></MatrixRain>
      <Navbar></Navbar>
      <Start></Start>
    </div>
  );
}

export default App;
