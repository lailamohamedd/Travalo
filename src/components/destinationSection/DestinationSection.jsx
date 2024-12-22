import DestinationCard from "../destinationCard/DestinationCard";
import HeaderSection from "../headerSection/HeaderSection";
import "./destinationSection.scss";
import img1 from "./../../assets/images/7.webp";
import img2 from "./../../assets/images/9.webp";
import img3 from "./../../assets/images/4.webp";

const DestinationSection = () => {
  const destinationData = [
    {
      id: "destination-1",
      img: img1,
      title: "LandScap Beach",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat illum tempora in ipsam assumenda quaerat.",
    },
    {
      id: "destination-2",
      img: img2,
      title: "LandScap Beach",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat illum tempora in ipsam assumenda quaerat.",
    },
    {
      id: "destination-3",
      img: img3,
      title: "LandScap Beach",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat illum tempora in ipsam assumenda quaerat.",
    },
  ];

  return (
    <div className="destination_section destination py px">
      <HeaderSection title={"The Destination"} />
      <div className="destination_section_cards">
        {destinationData.map((destination) => (
          <DestinationCard
            key={destination.id}
            title={destination.title}
            desc={destination.desc}
            img={destination.img}
          />
        ))}
      </div>
    </div>
  );
};

export default DestinationSection;
