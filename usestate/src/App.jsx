import RestaurantsContainer from "./components/RestaurantsContainer";
import { restaurants } from "./data/data.js";
import "./App.css";
import { useState } from "react";
import NewRestaurantForm from "./components/NewRestaurantForm.jsx";

//App is the root of our application where we load in components
function App() {
  const [restaurantState, setRestaurants] = useState([...restaurants]);

  //function to add new restaurant to state
  const addRestaurant = (NewRestaurant) => {
    setRestaurants((prevRestaurants) => [...prevRestaurants, NewRestaurant]);
  };

  return (
    <div className="App">
      <NewRestaurantForm addRestaurant={addRestaurant} />
      <RestaurantsContainer restaurants={restaurantState} />
    </div>
  );
}

export default App;
