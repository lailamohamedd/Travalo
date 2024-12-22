import "./SlideBanner.scss";
import { motion } from "framer-motion";

const SlideBanner = ({ title, sub_title, img }) => {
  return (
    <div className="slide_banner">
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        src={img}
        alt={title + "-image"}
      />
      <div className="slide_banner_overlay">
        <div className="slide_banner_overlay_message">
          <motion.h6
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.1 }}
            className="Euphoria_font"
          >
            {sub_title}
          </motion.h6>
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.2 }}
          >
            {title}
          </motion.h2>
        </div>
      </div>
    </div>
  );
};

export default SlideBanner;
