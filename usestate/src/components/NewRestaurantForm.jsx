import { useState } from "react";

function NewRestaurantForm({ addRestaurant }) {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    cuisine: "",
    rating: "",
    image: "",
    menuInput: "",
    hoursInput: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const parseMenu = (input) => {
    if (!input.trim()) return [];
    return input.split(",").map((item) => {
      const [name, price] = item.split(":").map((s) => s.trim());
      return { item: name, price: parseFloat(price) };
    });
  };

  const parseHours = (input) => {
    if (!input.trim()) return {};
    const entries = input
      .split(",")
      .map((pair) => pair.split(":").map((s) => s.trim()));
    return Object.fromEntries(entries);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRestaurant = {
      name: formData.name,
      address: formData.address,
      phone: formData.phone,
      cuisine: formData.cuisine,
      rating: formData.rating,
      image: formData.image,
      menu: parseMenu(formData.menuInput),
      hours: parseHours(formData.hoursInput),
    };

    //send form data up to App.jsx
    addRestaurant(newRestaurant);
    //reset form
    setFormData({
      name: "",
      address: "",
      phone: "",
      cuisine: "",
      rating: "",
      image: "",
      menuInput: "",
      hoursInput: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h2>Add a New Restaurant</h2>
      <input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
        required
      />
      <input
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <input
        name="cuisine"
        placeholder="Cuisine"
        value={formData.cuisine}
        onChange={handleChange}
        required
      />
      <input
        name="rating"
        placeholder="Rating"
        value={formData.rating}
        onChange={handleChange}
        required
      />
      <input
        name="image"
        placeholder="Image URL"
        value={formData.image}
        onChange={handleChange}
        required
      />

      <input
        name="menuInput"
        placeholder='Menu (eg. "Burger:9.99, Pizza:11.50")'
        value={formData.menuInput}
        onChange={handleChange}
      />
      <input
        name="hoursInput"
        placeholder='Hours (eg. "mon:8-5, tues:9-6")'
        value={formData.hoursInput}
        onChange={handleChange}
      />

      <button type="submit">Add Restaurant</button>
    </form>
  );
}

export default NewRestaurantForm;
