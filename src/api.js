/*jshint esversion: 8 */
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

 
 export const mockAirports = [
  { code: 'BCN', name: 'Barcelona Airport' },
  { code: 'IST', name: 'Istanbul Airport' },
  { code: 'ANK', name: 'Ankara Airport' },
  { code: 'MAD', name: 'Madrid Airport' },
];


export const fetchAirports = async () => {
  await delay(1000);
  console.log('Fetching airport data...');
  return { airports: mockAirports };
};


  
  const mockFlights = [
    {
      id: 1,
      airline: 'Airline 1',
      departureAirport: 'BCN', 
      arrivalAirport: 'IST',
      city: 'Barcelona',
      departureDate: '01/17/2024',
      returnDate: '01/19/2024',
      price: 900,
    },
    {
      id: 2,
      airline: 'Airline 2',
      departureAirport: 'IST',  
      arrivalAirport: 'ANK', 
      city: 'Istanbul',
      departureDate: '01/17/2024',
      returnDate: '01/20/2024',
      price: 750,
    },
    {
      id: 3,
      airline: 'Airline 2',
      departureAirport: 'ANK',  
      arrivalAirport: 'MAD',  
      city: 'Ankara',
      departureDate: '01/17/2024',
      returnDate: '01/18/2024',
      price: 750,
    },
    {
      id: 4,
      airline: 'Airline 3',
      departureAirport: 'MAD',  
      arrivalAirport: 'BCN',    
      city: 'Madrid',
      departureDate: '01/17/2024',
      returnDate: '01/18/2024',
      price: 950,
    },
  ];

  

export const searchFlights = async (searchParams) => {
  await delay(1000);
  console.log('Calling searchFlights with parameters:', searchParams);
  await delay(1000);
  console.log('Returning mockFlights data:', mockFlights);
  return mockFlights;
  };
