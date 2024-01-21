/*jshint esversion: 8 */
import React from 'react';
import './ListingComponent.css';

const ListingComponent = ({ flights, loading }) => {
  /* jshint ignore:start */
  return (
    <div>
      
      
      {!loading && flights.length > 0 && (
        <div>
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
  );
  /* jshint ignore:end */
};

export default ListingComponent;
