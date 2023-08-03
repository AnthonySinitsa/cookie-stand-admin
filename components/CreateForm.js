import { useState } from 'react';
import { hours } from '../data'; // Check the correct relative path to data.js

export default function CreateForm({ onLocationCreate }) {
  const [locationName, setLocationName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const hourlySales = hours.map(() => Math.floor(Math.random() * 100)); // Generate random sales for each hour
    const newLocation = {
      location: locationName,
      hourly_sales: hourlySales,
    };
    onLocationCreate(newLocation); // Callback to the parent component to handle the new location
    setLocationName(''); // Clear the input field after submission
  };

  const handleLocationChange = (event) => {
    setLocationName(event.target.value);
  };

  return (
    <div className="bigBox">
      <h2 className="createCookie">Create Cookie Stand</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label className="firstLabel" htmlFor="location">
          Location
        </label>
        <input
          className="firstInput"
          type="text"
          value={locationName}
          onChange={handleLocationChange}
        />
        <div className="threeFormButton">
          <label htmlFor="minimum-customer-per-hour">Minimum Customers per Hour</label>
          <input className="input" type="number" />
          <label htmlFor="maximum-customer-per-hour">Maximum Customer per Hour</label>
          <input className="input" type="number" />
          <label htmlFor="average-cookies-per-sale">Average Cookies per Sale</label>
          <input className="input" type="number" />
          <button className="button" type="submit">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
