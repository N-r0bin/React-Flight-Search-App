import React from 'react';
import './ListingComponent.css';
import FlightItem from './FlightItem';

const ListingComponent = ({ departureFlights, returnFlights }) => {
  return (
    <div className="container mt-4">
      {departureFlights.length > 0 && (
        <div>
          <h3>Departure Flights:</h3>

          <ul className="list-unstyled">
            {departureFlights.map((flight) => (
              <FlightItem key={flight.id} flight={flight} />
            ))}
          </ul>
        </div>
      )}

      {returnFlights.length > 0 && (
        <div>
          <h3>Return Flights:</h3>

          <ul className="list-unstyled">
            {returnFlights.map((flight) => (

              <FlightItem key={flight.id} flight={flight} />
            ))}
          </ul>
        </div>
      )}

      {departureFlights.length === 0 && returnFlights.length === 0 && (
        <p>No flights found for the selected criteria.</p>
      )}
    </div>
  );
};

export default ListingComponent;
