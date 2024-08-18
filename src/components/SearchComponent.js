import React, { useState } from 'react';
import './SearchComponent.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { airports } from '../api';

const SearchComponent = ({ onSearch }) => {
  const [departureAirport, setDepartureAirport] = useState('');
  const [arrivalAirport, setArrivalAirport] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [isOneWay, setIsOneWay] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = () => {
    if (departureAirport === '' || arrivalAirport === '' || departureDate === '') {
      setError('Please fill in all required fields.');
      return;
    }

    const searchParams = {
      departureAirport,
      arrivalAirport,
      departureDate,
      returnDate: isOneWay ? null : returnDate,
    };

    onSearch(searchParams);
  };

  return (
    <div className="container ">
      <form>
        <div className="row mb-3">
          <div className="col-md-6 d-flex align-items-center">
            <label className="form-label mb-0 me-2">One-Way</label>
            <div className="form-check form-switch mb-0">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                checked={isOneWay}
                onChange={() => setIsOneWay(!isOneWay)}
              />
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">From</label>
            <select
              className="form-select"
              value={departureAirport}
              onChange={(e) => setDepartureAirport(e.target.value)}
            >
              <option value="">Select Departure Airport</option>
              {airports.map((airport) => (
                <option key={airport.code} value={airport.code}>
                  {airport.name}
                </option>
              ))}
            </select>
          </div>

          <div className="col-md-6">
            <label className="form-label">To</label>
            <select
              className="form-select"
              value={arrivalAirport}
              onChange={(e) => setArrivalAirport(e.target.value)}
            >
              <option value="">Select Arrival Airport</option>
              {airports.map((airport) => (
                <option key={airport.code} value={airport.code}>
                  {airport.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Departure Date</label>
            <input
              type="date"
              className="form-control"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Return Date</label>
            <input
              type="date"
              className="form-control"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              disabled={isOneWay}
            />
          </div>
        </div>

        <button type="button" className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default SearchComponent;
