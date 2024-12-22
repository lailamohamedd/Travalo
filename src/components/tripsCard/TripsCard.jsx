const TripsCard = ({ title, desc, img, onDetailsClick }) => {
  return (
    <div className="trips_card">
      <div className="trips_card_image">
        <img src={img} alt={`Image for ${title}`} />
      </div>
      <div className="trips_card_desc">
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
      <div className="trips_card_btn">
        <button className="btn" onClick={onDetailsClick}>
          Details
        </button>
      </div>
    </div>
  );
};

export default TripsCard;
