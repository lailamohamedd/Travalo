import { useState, useEffect } from "react";
import "./scrollToTopButton.scss"
import { FaArrowUp } from "react-icons/fa";  // يمكنك تغيير الأيقونة كما تريد.

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkScrollPosition = () => {
    if (window.scrollY > 100) {  // يظهر الزر بعد النزول 100px.
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",  // لجعل الانتقال إلى أعلى الصفحة يكون سلساً.
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);  // إضافة المستمع لحدث التمرير.
    return () => {
      window.removeEventListener('scroll', checkScrollPosition);  // تنظيف المستمع عند الخروج من الصفحة.
    };
  }, []);

  return (
    isVisible && (
      <button
        className="scroll-to-top-btn"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <FaArrowUp size={30} color="#fff" />
      </button>
    )
  );
};

export default ScrollToTopButton;
