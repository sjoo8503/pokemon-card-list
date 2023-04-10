import { useState, useEffect } from "react";
import Card from "./components/Card";
// https://pokeapi.co/api/v2/
// `https://img.pokemondb.net/sprites/heartgold-soulsilver/normal/${YOUR POKEMON NAME}.png`

function App() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon");
      const data = await response.json();
      setResult(data.results);
      // console.log(data.results);
    }
    fetchData();
  }, []);

  return (
    <div className="flex justify-center gap-4 flex-wrap">
      {result.map(
        (
          item // "item" is a name of every items inside the array (it can be any names)
        ) => (
          // <h1 key={item.name}>{item.name}</h1> // map() always requires a unique key property
          <Card key={item.name} nameProp={item.name}></Card>
        )
      )}
    </div>
  );
}

export default App;
