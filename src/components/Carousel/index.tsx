"use client";

import React, { useEffect, useState } from "react";
import { useSwipeable, SwipeEventData } from "react-swipeable";
import Image from "next/image";

interface ImageCarouselProps {
  images: string[];
  interval?: number;
  swipeSpeed?: number;
  className?: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  interval = 3000,
  swipeSpeed = 700,
  className,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleSwipe = ({ dir }: SwipeEventData) => {
    if (dir === "Left") {
      nextSlide();
    } else if (dir === "Right") {
      prevSlide();
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    trackMouse: true,
  });

  useEffect(() => {
    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer); // Clean up interval on component unmount
  }, [currentIndex, interval]);

  return (
    <div>
      <div
        {...swipeHandlers}
        className={`${
          className ?? ""
        } relative w-full overflow-hidden  rounded-lg`}
      >
        <div
          className="flex transition-transform duration-300"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transitionDuration: `${swipeSpeed}ms`,
          }}
        >
          {images.map((image, index) => (
            <div className="w-full flex-shrink-0" key={index}>
              <Image
                src={image}
                alt={`Slide ${index}`}
                width={1000}
                height={600}
                className={`w-full h-full object-cover`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className={`flex items-center gap-1 mt-2`}>
        {images.map((rows, index) => (
          <div
            onClick={() => {
              setCurrentIndex(index);
            }}
            key={rows}
            className={`h-2 w-full ${
              index === currentIndex ? "bg-gray-700" : "bg-gray-200"
            } rounded-full`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
