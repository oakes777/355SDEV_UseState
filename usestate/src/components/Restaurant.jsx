import { useState } from "react";

function Restaurant(props) {
  const [hours, setHours] = useState(false);
  const [menu, setMenu] = useState(false);

  const handleHours = () => {
    setHours((prev) => !prev);
  };
  const handleMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <div className="restaurant">
      <img src={props.restaurant.image} alt={props.restaurant.name} />
      <h2>{props.restaurant.name}</h2>
      <ul>
        <li>{props.restaurant.address}</li>
        <li>{props.restaurant.phone}</li>
        <li>{props.restaurant.cuisine}</li>
        <li>{props.restaurant.rating}</li>
      </ul>
      <button onClick={handleHours} aria-expanded={hours}>
        {hours ? "Hide Hours" : "Show Hours"}
      </button>
      <button onClick={handleMenu}>
        {menu ? "Hide Menu" : "Show Menu"}
      </button>
      {/* Conditional rendering for Hours */}
      {hours && (
        <ul>
          {Object.entries(props.restaurant.hours).map(([day, time]) => (
            <li key={day}>
              <strong>{day.charAt(0).toUpperCase() + day.slice(1)}:</strong>{" "} {time}
            </li>
          ))}
        </ul>
      )}
      {/* Conditional rendering for Menu */}
      {menu && (
        <ul>
          {props.restaurant.menu.map((menuItem, index) => (
            <li key={index}>
              {`${menuItem.item} $${menuItem.price}`}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Restaurant;
