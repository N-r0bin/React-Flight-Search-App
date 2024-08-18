import React, { useState } from 'react';
import SearchComponent from './components/SearchComponent';
import ListingComponent from './components/ListingComponent';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { mockFlights } from './api';

function App() {
  const [departureFlights, setDepartureFlights] = useState([]);
  const [returnFlights, setReturnFlights] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFlightSearch = (searchParams) => {
    setLoading(true);

    const filteredDepartureFlights = mockFlights.filter(
      (flight) =>
        flight.departureAirport === searchParams.departureAirport &&
        flight.arrivalAirport === searchParams.arrivalAirport &&
        flight.date === searchParams.departureDate
    );

    let filteredReturnFlights = [];
    if (searchParams.returnDate) {
      filteredReturnFlights = mockFlights.filter(
        (flight) =>
          flight.departureAirport === searchParams.arrivalAirport &&
          flight.arrivalAirport === searchParams.departureAirport &&
          flight.date === searchParams.returnDate
      );
    }

    setDepartureFlights(filteredDepartureFlights);
    setReturnFlights(filteredReturnFlights);
    setLoading(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Flight Search</h1>
      </header>
      <SearchComponent onSearch={handleFlightSearch} />
      {loading && <p>Loading flights...</p>}
      {!loading && (
        <ListingComponent
          departureFlights={departureFlights}
          returnFlights={returnFlights}
        />
      )}
    </div>
  );
}

export default App;
