import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [inputIngradient, setInputIngradient] = useState("");
  return (
    <>
      <div className="flex justify-center content-center h-64 w-full bg-slate-900 px-0">
        <div className="  bg-slate-500 w-80 h-12 ">
          <input
            type="text"
            placeholder="Ingardient"
            onChange={(e) => {
              setInputIngradient(e.target.value);
            }}
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0 px-1 rounded ">
            SearchItem
          </button>
        </div>
      </div>
      <div className="grid min-h-48 sm:grid-cols-4 bg-yellow-100"></div>

      <div className="grid m-3 gap-4 sm:grid-cols-4">
        <div className="min-h-48 rounded-lg bg-amber-500 shadow"></div>
        <div className="min-h-48 rounded-lg bg-amber-500 shadow"></div>
        <div className="min-h-48 rounded-lg bg-amber-500 shadow"></div>
        <div className="min-h-48 rounded-lg bg-amber-500 shadow"></div>
      </div>

      <button className="bg-orange-800 hover:bg-orange-900 text-white font-bold py-0 px-1 rounded ">
        SearchItem
      </button>
    </>
  );
}

export default App;
