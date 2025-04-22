import Restaurant from "./Restaurant";

function RestaurantsContainer(props) {
  console.log(props);
  return (
    <div className="restaurantContainer">
      {props.restaurants.map((restaurant, index) => (
        <Restaurant key={index} restaurant={restaurant} />
      ))}
    </div>
  );
}

export default RestaurantsContainer;
