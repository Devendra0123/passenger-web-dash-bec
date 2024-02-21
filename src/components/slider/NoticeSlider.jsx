import React, { useEffect, useState } from "react";
import NoticeCard from "../Notice/NoticeCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const NoticeSlider = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % data?.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? data?.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  // Handle Touch Start
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  // Handle touch end
  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchDiff = touchEndX - touchStartX;

    if (touchDiff > 50) {
      const prevIndex = activeIndex === 0 ? data?.length - 1 : activeIndex - 1;
      setActiveIndex(prevIndex);
    } else if (touchDiff < -50) {
      nextSlide();
    }
  };

  return (
    <div className="carousel w-full">
      <div className="absolute right-[20px] top-[20px] flex items-center gap-[20px]">
        <div
          onClick={prevSlide}
          className="cursor-pointer w-[35px] h-[35px] rounded-full flex items-center justify-center bg-light_gray "
        >
          <IoIosArrowBack />
        </div>

        <div
          onClick={nextSlide}
          className="cursor-pointer w-[35px] h-[35px] rounded-full flex items-center justify-center bg-light_gray "
        >
          <IoIosArrowForward />
        </div>
      </div>

      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="slide-container"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {data?.length > 0 &&
          data.map((data, index) => (
            <div
              key={index}
              className={`min-w-[100%] slide ${index === activeIndex ? "active" : ""}`}
            >
              <NoticeCard title={data?.title} description={data?.message} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default NoticeSlider;
