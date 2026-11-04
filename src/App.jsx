
import { useState } from 'react';
import { data } from './data';
import HotelCard from './HotelCard';

function App() {
  const [hotels, setHotels] = useState(data);

  const removeHotel = (id) => {
    const updatedHotels = hotels.filter((hotel) => hotel.id !== id);
    setHotels(updatedHotels);
  };

  return (
    <div className="container">
      <h1>Top 5 Hotels in New York</h1>

      <p>
        Discover our collection of {hotels.length} luxury hotels
      </p>

      <div className="hotels">
        {hotels.map((hotel) => (
          <HotelCard
            key={hotel.id}
            hotel={hotel}
            removeHotel={removeHotel}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
