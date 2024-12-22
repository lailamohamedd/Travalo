import Navbar from "../../components/navbar/Navbar";
import BannerSection from "../../components/BannerSection/BannerSection";
import BrandsSection from "../../components/brandsSection/BrandsSection";
import DestinationSection from "../../components/destinationSection/DestinationSection";
import Footer from "../../components/footer/Footer";
import TripSection from "../../components/tripSection/TripSection";
import VideoSection from "../../components/videoSection/VideoSection";
import ScrollToTopButton from "../../components/scrollToToButton/ScrollToTopButton";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <BannerSection />
      <DestinationSection />
      <VideoSection />
      <BrandsSection />
      <TripSection />
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default HomePage;
