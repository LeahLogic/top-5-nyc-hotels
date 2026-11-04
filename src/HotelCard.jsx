
import { useState } from 'react';

function HotelCard({ hotel, removeHotel }) {
  const { id, hotelName, description, image, source } = hotel;

  const [showMore, setShowMore] = useState(false);

  return (
    <div className="hotel">
      <img src={image} alt={hotelName} />

      <div className="hotel-info">
        <h2>{hotelName}</h2>

        <p>
          {showMore
            ? description
            : description.substring(0, 180) + '...'}{' '}

          <button
            className="read-more-btn"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'Read Less ↑' : 'Read More →'}
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
}

export default HotelCard;
