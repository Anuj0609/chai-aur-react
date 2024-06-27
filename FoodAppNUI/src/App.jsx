import { useEffect, useState } from "react";
import "./App.css";
import { db, dbNonveg } from "./food";

function App() {
  const [onlyNonVeg, setOnlyNonVeg] = useState(false);
  const [onlySnacks, setOnlySnacks] = useState(false);
  const [onlyBeverages, setOnlyBeverages] = useState(false);
  const [foodToShow, setFoodToShow] = useState([]);

  const getRandomFromArray = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };
  const getRandomFoodOptions = () => {
    let filteredFoods = db;

    if (onlyNonVeg) {
      filteredFoods = dbNonveg;
    }

    if (onlySnacks) {
      filteredFoods = filteredFoods.filter((food) => food.category === "Snack");
    }

    if (onlyBeverages) {
      filteredFoods = filteredFoods.filter(
        (food) => food.category === "Beverages"
      );
    }

    const randomFood1 = getRandomFromArray(filteredFoods);
    const randomFood2 = getRandomFromArray(filteredFoods);

    const randomFood3 = getRandomFromArray(filteredFoods);

    const randomFood4 = getRandomFromArray(filteredFoods);

    console.log(randomFood1, randomFood2, randomFood3, randomFood4);

    setFoodToShow([randomFood1, randomFood2, randomFood3, randomFood4]);
  };

  useEffect(() => {
    getRandomFoodOptions();
  }, [onlyNonVeg, onlySnacks, onlyBeverages]);

  return (
    <>
      <div>
        <input
          type="checkbox"
          defaultChecked={onlySnacks}
          id="snacksOnly"
          onChange={(e) => {
            setOnlySnacks((prev) => !prev);
          }}
        />
        <label htmlFor="snacksOnly">Only Snacks</label>

        <input
          type="checkbox"
          // defaultChecked={onlyNonVeg}
          id="nonVegOnly"
          onChange={(e) => {
            setOnlyNonVeg((prev) => !prev);
          }}
        />
        <label htmlFor="nonVegOnly">Only Non Veg</label>

        <input
          type="checkbox"
          defaultChecked={onlyBeverages}
          id="beveragesOnly"
          onChange={(e) => {
            setOnlyBeverages((prev) => !prev);
          }}
          disabled={onlyNonVeg}
        />
        <label htmlFor="beveragesOnly">Only beverages</label>
      </div>

      <div>
        {foodToShow.map((food, index) => (
          <div
            key={index}
            style={{
              marginTop: "12px",
              border: "2px solid grey",
            }}
          >
            <h3>{food.recipeName}</h3>
            <ul>
              {food.ingredientList.split(",").map((ingredient) => {
                return <li key={ingredient}>{ingredient}</li>;
              })}
            </ul>
            <img
              src={food.image}
              style={{
                maxHeight: "200px",
              }}
            />
            <div>
              <a href={food.url} target="_blank">
                See Recipe
              </a>
            </div>
          </div>
        ))}
      </div>

      <button onClick={getRandomFoodOptions}>Bnaow</button>
    </>
  );
}

export default App;
