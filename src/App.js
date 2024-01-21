/*jshint esversion: 8 */
import React, { useState } from 'react';
import SearchComponent from './components/SearchComponent';
import ListingComponent from './components/ListingComponent';
import { searchFlights } from './api'; 
import './App.css'; 

function App() {
  
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);

  
  const handleFlightSearch = async (searchParams) => {
    setLoading(true);

    try {
      
      const data = await searchFlights(searchParams);
      setFlights(data);
    } catch (error) {
      setFlights([]); 
      console.error('Error fetching flights:', error);
      
    } finally {
      setLoading(false);
    }
  };
  /* jshint ignore:start */
  return (
    <div className="App">
      <header className="App-header">
        <h1>Flight Search App</h1>
        {/* SearchComponent with the flight search callback */}
        <SearchComponent onSearch={handleFlightSearch} />
        {/* ListingComponent to display search results */}
        <ListingComponent flights={flights} loading={loading} />
      </header>
    </div>
  );
  /* jshint ignore:end */
}

export default App;

