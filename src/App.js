// import logo from "./logo.svg";
import "./App.css";
import Excercises from "./Components/Exercises/Excercises";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="bg-emerald-50 h-screen">
      <Header></Header>
      <Excercises></Excercises>
    </div>
  );
}

export default App;
