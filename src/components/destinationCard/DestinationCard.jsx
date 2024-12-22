const DestinationCard = ({ title, desc, img }) => {
  return (
    <div className="destination_card">
      <div className="destination_card_img">
        <img src={img} alt="" />
      </div>
      <div className="destination_card_desc">
        <h5>{title}</h5>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default DestinationCard;
