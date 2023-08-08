import { useState } from 'react';
import { hours } from '../data'; 

export default function CreateForm({ onLocationCreate }) {
  const [locationName, setLocationName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const hourlySales = hours.map(() => Math.floor(Math.random() * 100)); 

    const newLocation = {
      location: locationName,
      hourly_sales: hourlySales,
    };
    onLocationCreate(newLocation);
    setLocationName(''); 
  };

  const handleLocationChange = (event) => {
    setLocationName(event.target.value);
  };

  return (
    <div className="formBox">
      <h2 className="createCookieStand">Create Cookie Stand</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label className="locationLabel" htmlFor="location">Location</label>
        <input
          className="locationInput"
          type="text"
          value={locationName}
          onChange={handleLocationChange}
        />
        <div className="formContents">
          <label htmlFor="min-customer-per-hour">Minimum Customers per Hour</label>
          <input className="input" type="number" />
          <label htmlFor="max-customer-per-hour">Maximum Customer per Hour</label>
          <input className="input" type="number" />
          <label htmlFor="avg-cookies-per-sale">Average Cookies per Sale</label>
          <input className="input" type="number" />
          <button className="createButton" type="submit">Create</button>
        </div>
      </form>
    </div>
  );
}