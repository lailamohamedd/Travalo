import "./bannerSection.scss";
import { SwiperSlide, Swiper } from "swiper/react";
import SlideBanner from "../slideBanner/SlideBanner";
import ArrowsBanner from "../arrowsBanner/ArrowsBanner";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import img1 from "./../../assets/images/3.webp";
import img2 from "./../../assets/images/3.webp";
import img3 from "./../../assets/images/3.webp";

const BannerSection = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + 0 + (index + 1) + "</span>";
    },
  };

  const slideData = [
    {
      id: "slide-1",
      title: "island",
      sub_title: "Nature landscape",
      img: img1,
    },
    {
      id: "slide-2",
      title: "landscape",
      sub_title: "Nature landscape",
      img: img2,
    },
    {
      id: "slide-3",
      title: "island",
      sub_title: "island landscape",
      img: img3,
    },
  ];

  return (
    <div className="banner_section">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        pagination={pagination}
        navigation={{
          nextEl: ".arrows_banner_rightArrow",
          prevEl: ".arrows_banner_leftArrow",
        }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
      >
        {slideData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <SlideBanner
              img={slide.img}
              title={slide.title}
              sub_title={slide.sub_title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <ArrowsBanner />
    </div>
  );
};

export default BannerSection;
