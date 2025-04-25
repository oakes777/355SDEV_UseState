import { useState } from "react";

function NewRestaurantForm({ addRestaurant }) {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    cuisine: "",
    rating: "",
    image: "",
    menu: [],
    hours: {}
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //send form data up to App.jsx
    addRestaurant(formData);
    setFormData({
      name: "",
      address: "",
      phone: "",
      cuisine: "",
      rating: "",
      image: "",
      menu: [],
      hours: {},
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h2>Add a New Restaurant</h2>
      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
      <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
      <input name="cuisine" placeholder="Cuisine" value={formData.cuisine} onChange={handleChange} required />
      <input name="rating" placeholder="Rating" value={formData.rating} onChange={handleChange} required />
      <input name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} required />
      <button type="submit">Add Restaurant</button>
    </form>
  );
}

export default NewRestaurantForm;
