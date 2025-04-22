import RestaurantsContainer from "./components/RestaurantsContainer";
import { restaurants } from "./data/data.js";
import "./App.css";
import { useState } from "react";

//App is the root of our application where we load in components
function App() {
  const [restaurantState, setRestaurants] = useState([...restaurants]);

  return (
    <div className="App">
      <RestaurantsContainer restaurants={restaurantState} />
    </div>
  );
}

export default App;
