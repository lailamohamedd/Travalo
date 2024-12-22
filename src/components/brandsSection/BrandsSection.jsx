import Marquee from "react-fast-marquee";
import "./brandsSection.scss";
import brandImg1 from "./../../assets/images/brand-1.png"
import brandImg2 from "./../../assets/images/brand-2.png"
import brandImg3 from "./../../assets/images/brand-3.png"

const BrandsSection = () => {
  return (
    <div className="brands_section">
      <div className="brands_section_container">
        <Marquee
          style={{
            display: "flex",
            gap: "2em",
            alignItems: "center",
            height: "100%",
            overflow: "hidden",
          }}
        >
          <img
            src={brandImg1}
            width={"10%"}
            alt="brand_image"
          />
          <img
            src={brandImg2}
            width={"10%"}
            alt="brand_image"
          />
          <img
            src={brandImg3}
            width={"10%"}
            alt="brand_image"
          />
          <img
            src={brandImg1}
            width={"10%"}
            alt="brand_image"
          />
          <img
            src={brandImg2}
            width={"10%"}
            alt="brand_image"
          />
          <img
            src={brandImg3}
            width={"10%"}
            alt="brand_image"
          />
          <img
            src={brandImg2}
            width={"10%"}
            alt="brand_image"
          />
          <img
            src={brandImg3}
            width={"10%"}
            alt="brand_image"
          />
          <img
            src={brandImg3}
            width={"10%"}
            alt="brand_image"
          />
        </Marquee>
      </div>
    </div>
  );
};

export default BrandsSection;
