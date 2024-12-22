import { Swiper, SwiperSlide } from "swiper/react";
import HeaderSection from "../headerSection/HeaderSection";
import TripsCard from "../tripsCard/TripsCard";
import "./tripSection.scss";
import img1 from "./../../assets/images/1.webp";
import img2 from "./../../assets/images/2.webp";
import img3 from "./../../assets/images/3.webp";
import img4 from "./../../assets/images/4.webp";
import img5 from "./../../assets/images/5.webp";
import img6 from "./../../assets/images/6.webp";

const TripSection = () => {
  const tripsData = [
    {
      id: Math.random().toString(),
      img: img1,
      title: "LandScap Beach",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat illum tempora in ipsam assumenda quaerat.",
    },
    {
      id: Math.random().toString(),
      img: img2,
      title: "LandScap Beach",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat illum tempora in ipsam assumenda quaerat.",
    },
    {
      id: Math.random().toString(),
      img: img3,
      title: "LandScap Beach",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat illum tempora in ipsam assumenda quaerat.",
    },
    {
      id: Math.random().toString(),
      img: img4,
      title: "LandScap Beach",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat illum tempora in ipsam assumenda quaerat.",
    },
    {
      id: Math.random().toString(),
      img: img5,
      title: "LandScap Beach",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat illum tempora in ipsam assumenda quaerat.",
    },
    {
      id: Math.random().toString(),
      img: img6,
      title: "LandScap Beach",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat illum tempora in ipsam assumenda quaerat.",
    },
  ];

  return (
    <div className="trips_section trips px py">
      <HeaderSection title={"The Trips"} />
      <div className="trips_section_container">
        <Swiper
          slidesPerView={1.1}
          spaceBetween={30}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2.3,
            },
            1250: {
              slidesPerView: 3,
            },
            1440: {
              slidesPerView: 3.3,
            },
          }}
        >
          {tripsData.map((trip) => (
            <SwiperSlide key={trip.id}>
              <TripsCard title={trip.title} desc={trip.desc} img={trip.img} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TripSection;
