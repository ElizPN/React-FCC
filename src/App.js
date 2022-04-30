import "./App.css";
import { Counter } from "./tasks/Counter";
import { MyForm } from "./tasks/MyForm";
import { MyApp2 } from "./tasks/MyApp2";
import { MyApp } from "./tasks/MyApp";
import { Controller, OnlyEvens } from "./tasks/life_cycle_methods/OnlyEvens";
import { MagicEightBall } from "./tasks/MagicEightBall.js";
import { CheckUserAge } from "./tasks/CkeckUserAge";
import { GateKeeper } from "./tasks/GateKeeper";
import { MyToDoList } from "./tasks/MyToDoList";

function App() {
  return (
    <div className="App">
      <Counter />
      <hr></hr>
      <MyForm />
      <hr></hr>
      <MyApp />
      <hr></hr>
      <MyApp2 />
      <hr></hr>
      <Controller />
      error
      <hr></hr>
      <MagicEightBall />
      <hr></hr>
      <CheckUserAge />
      <hr></hr>
      <GateKeeper />
      <hr></hr>
      <MyToDoList />
    </div>
  );
}

export default App;
