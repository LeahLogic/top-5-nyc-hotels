
import { useState } from 'react';
import { data } from './data';

function App() {
  const [hotels, setHotels] = useState(data);
  const [expandedHotels, setExpandedHotels] = useState([]);

  const toggleDescription = (id) => {
    if (expandedHotels.includes(id)) {
      setExpandedHotels(
        expandedHotels.filter((hotelId) => hotelId !== id)
      );
    } else {
      setExpandedHotels([...expandedHotels, id]);
    }
  };

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
        {hotels.map((hotel) => {
          const { id, hotelName, description, image, source } = hotel;

          return (
            <div className="hotel" key={id}>
              <img src={image} alt={hotelName} />

              <div className="hotel-info">
                <h2>{hotelName}</h2>

                <p>
                  {expandedHotels.includes(id)
                    ? description
                    : description.slice(0, 180) + '...'}{' '}

                  <button
                    className="read-more-btn"
                    onClick={() => toggleDescription(id)}
                  >
                    {expandedHotels.includes(id)
                      ? 'Read Less ↑'
                      : 'Read More →'}
                  </button>
                </p>

                <a
                  href={source}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Hotel Website
                </a>

                <button
                  className="remove-btn"
                  onClick={() => removeHotel(id)}
                >
                  Remove from Collection ×
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
