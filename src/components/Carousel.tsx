import React, { useState, ReactNode } from 'react';
import '../styles.css';

interface CarouselProps {
  children: ReactNode[];
  autoPlay?: boolean;
  interval?: number;
  showDots?: boolean; // New prop for showing dots
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  autoPlay = false,
  interval = 3000,
  showDots = false, // Default value is false
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  React.useEffect(() => {
    if (autoPlay) {
      const timer = setInterval(nextSlide, interval);
      return () => clearInterval(timer);
    }
  }, [autoPlay, interval]);

  return (
    <div className="carousel">
      <div
        className="carousel-content"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {children.map((child, index) => (
          <div key={index} className="carousel-item">
            {child}
          </div>
        ))}
      </div>
      <button className="carousel-button prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="carousel-button next" onClick={nextSlide}>
        &#10095;
      </button>
      {showDots && (
        <div className="carousel-dots">
          {children.map((_, index) => (
            <span
              key={index}
              className={`carousel-dot ${
                index === currentIndex ? 'active' : ''
              }`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
