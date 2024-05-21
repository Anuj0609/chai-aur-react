import { useState, useCallback } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(true);
  const [characters, setCharacters] = useState(true);

  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "SABRINAPRIYANKACHOUDHARYanujshrivastava1234567890";

    if (number) str
  }, [length, number, characters, setPassword]);

  return (
    <>
      <h1 className="text-4xl text-center">Password Generator</h1>
    </>
  );
}

export default App;
