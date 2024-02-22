import React, { useState } from "react";
import "./App.css";
import Inputfield from "./components/Inputfield";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");

  console.log(todo);
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <Inputfield todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default App;
