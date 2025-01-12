import React, { ReactNode } from 'react';
import '../styles.css';
interface CarouselProps {
    children: ReactNode[];
    autoPlay?: boolean;
    interval?: number;
    showDots?: boolean;
}
declare const Carousel: React.FC<CarouselProps>;
export default Carousel;
