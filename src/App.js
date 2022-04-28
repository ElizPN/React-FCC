import "./App.css";
import { Counter } from "./tasks/Counter";
import { MyForm } from "./tasks/MyForm";
import { MyApp2 } from "./tasks/MyApp2";

function App() {
  return (
    <div className="App">
      <Counter />
      <MyForm />
      <MyApp2 />
    </div>
  );
}

export default App;
