import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperCore } from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideData {
  id: number;
  content: React.ReactNode;
}

interface CarruselMobileProps {
  slides: SlideData[];
  paginationHeightClass?: string;
}

const swiperModules = [Navigation, Pagination, Autoplay];

const CarruselMobile: React.FC<CarruselMobileProps> = ({
  slides,
  paginationHeightClass = 'h-65',
}) => {
  const prevRef = React.useRef<HTMLButtonElement>(null);
  const nextRef = React.useRef<HTMLButtonElement>(null);
  const [swiperInstance, setSwiperInstance] = React.useState<SwiperCore | null>(null);

  React.useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      if (typeof swiperInstance.params.navigation !== 'boolean' && swiperInstance.params.navigation) {
        swiperInstance.params.navigation.prevEl = prevRef.current;
        swiperInstance.params.navigation.nextEl = nextRef.current;
        swiperInstance.navigation.init();
        swiperInstance.navigation.update();
      }
    }
  }, [swiperInstance]);

  return (
    <div className="hidden xl:block w-full mx-auto relative">
      <Swiper
        modules={swiperModules}
        spaceBetween={15}
        slidesPerView={3}
        onSwiper={setSwiperInstance}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
          disabledClass: 'opacity-30',
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className={paginationHeightClass}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex items-center justify-center h-full">
              {slide.content}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Botones de navegación */}
      <button
        ref={prevRef}
        className="absolute z-10 top-1/2 -left-6 transform -translate-y-1/2 bg-secondary/60 text-white p-2 rounded-full shadow-lg hover:bg-secondary cursor-pointer transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        ref={nextRef}
        className="absolute z-10 top-1/2 -right-6 transform -translate-y-1/2 bg-secondary/60 text-white p-2 rounded-full shadow-lg hover:bg-secondary cursor-pointer transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default CarruselMobile;
