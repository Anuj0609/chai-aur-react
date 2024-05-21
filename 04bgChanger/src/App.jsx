import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  const onColorChange = (color) => {
    setColor(color);
  };

  return (
    <div className="w-full h-screen duration-200" style={{ background: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-2 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ background: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ background: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ background: "blue" }}
          >
            blue
          </button>
          <button
            onClick={() => setColor("Yellow")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ background: "Yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("purple")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ background: "purple" }}
          >
            purple
          </button>
          <button
            onClick={() => setColor("white")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ background: "white" }}
          >
            White
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
