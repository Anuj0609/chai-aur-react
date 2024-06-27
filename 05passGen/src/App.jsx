import { useState, useCallback, useEffect } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";

    if (number) str += "1234567890";
    if (characters) str += "!@#$%^&*()_+";

    for (let index = 1; index <= length; index++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);

      console.log(pass);
    }
    setPassword(pass);
  }, [length, number, characters, setPassword]);
  useEffect(() => {
    passwordGenerator();
  }, [length, number, characters, passwordGenerator]);

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    alert("Copied");
  };

  return (
    <>
      <div>
        <h1 className="text-4xl text-center">Password Generator</h1>
        <input
          type="text"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          readOnly
        />
        <button onClick={handleCopy}>Copy</button>
      </div>

      <input
        type="range"
        min={8}
        max={15}
        value={length}
        onChange={(e) => {
          setLength(parseInt(e.target.value));
        }}
      />
      <label>Length:{length}</label>

      <input
        type="checkbox"
        id="cb"
        value={number}
        onChange={(e) => {
          setNumber((prev) => !prev);
        }}
      />
      <label htmlFor="cb">Numbers</label>

      <input
        type="checkbox"
        id="ct"
        value={characters}
        onChange={(e) => {
          setCharacters((prev) => !prev);
        }}
      />
      <label htmlFor="ct">Characters</label>
    </>
  );
}

export default App;
