/*jshint esversion: 8 */
import React, { useState, useEffect } from 'react';
import { fetchAirports } from '../api';
import './SearchComponent.css';

const SearchComponent = (props) => {
  const [departureAirport, setDepartureAirport] = useState('');
  const [arrivalAirport, setArrivalAirport] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [isOneWay, setIsOneWay] = useState(false);
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [mockAirports, setMockAirports] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
       
        const data = await fetchAirports();
        console.log('Data from API:', data);  
        setMockAirports(data.airports);
      } catch (error) {
        console.error('Error fetching airports:', error);
      }
    };

    fetchData(); 
  }, []);

  const handleSearch = async () => {
    try{
    if (departureAirport === '' || arrivalAirport === '' || departureDate === '') {
      setError('Please fill in all required fields.');
      return;
    }

    
      setLoading(true);

      const searchParams = {
        departureAirport,
        arrivalAirport,
        departureDate,
        returnDate: isOneWay ? null : returnDate,
        isOneWay,
      };

      const data = await props.onSearch(searchParams);

      
      const filteredFlights = data.filter((flight) => {
        return (
          flight.departureAirport === searchParams.departureAirport &&
          flight.arrivalAirport === searchParams.arrivalAirport &&
          flight.departureDate === searchParams.departureDate &&
          (!searchParams.returnDate || flight.returnDate === searchParams.returnDate)
        );
      });

      setFlights(filteredFlights);
      setError(null);
    } catch (error) {
      //setError('Error fetching flights. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  /* jshint ignore:start */
  return (
    <div>
    <h2 style={{ textAlign: 'center' }}>Flight Search</h2>
    <div className="container">
    <form>
      <div className="input-container">
        <div className="input-group">
          <label>Departure Airport </label>
          <select
            value={departureAirport}
            onChange={(e) => setDepartureAirport(e.target.value)}
          >
            <option value="">Select Departure Airport</option>
            {mockAirports.map((airport) => (
              <option key={airport.code} value={airport.code}>
                {airport.name}
              </option>
            ))}
          </select>
        </div>

        <div className="input-group">
          <label>Arrival Airport </label>
          <select
            value={arrivalAirport}
            onChange={(e) => setArrivalAirport(e.target.value)}
          >
            <option value="">Select Arrival Airport</option>
            {mockAirports.map((airport) => (
              <option key={airport.code} value={airport.code}>
                {airport.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="input-container">
        <div className="input-group">
          <label>Departure Date </label>
          <input
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Return Date (optional) </label>
          <input
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            disabled={isOneWay}
          />
        </div>
      </div>

      <div className="input-container">
        <div className="input-group">
          <label>One-Way Flight </label>
          <input
            type="checkbox"
            checked={isOneWay}
            onChange={() => setIsOneWay(!isOneWay)}
          />
        </div>
      </div>

      <button type="button" onClick={handleSearch}>
        Search
      </button>
    </form>

    {/* Display search results or loading message */}
    {loading && <p>Loading...</p>}
    {error && <p style={{ color: 'red' }}>{error}</p>}
    {flights.length > 0 && (
      <div>
        <h3>Search Results:</h3>
        <ul>
        {flights.map((flight) => (
      <div key={flight.id} className="flight-box">
        <div className="flight-info">
          <p className="flight-detail">Airline: {flight.airline}</p>
          <p className="flight-detail">City: {flight.city}</p>
        </div>
        <div className="flight-info">
          <p className="flight-detail">Departure: {flight.departureDate}</p>
          <p className="flight-detail">Arrival: {flight.returnDate}</p>
        </div>
        <div className="flight-info">
          <p className="flight-price">Price: {flight.price}</p>
        </div>
      </div>
    ))}
        </ul>
      </div>
    )}
  </div>
  </div>
);
  /* jshint ignore:end */
};

export default SearchComponent;
