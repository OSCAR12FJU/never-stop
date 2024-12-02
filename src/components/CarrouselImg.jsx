import PropTypes, { string } from "prop-types";
import { useRef } from "react";

const CarrouselImg = ({img}) =>{

    const carouselRef = useRef(null);

    const handleScroll = (direction) => {
      if (carouselRef.current) {
        const scrollAmount = 300; // Ajusta la cantidad de desplazamiento
        if (direction === 'left') {
          carouselRef.current.scrollLeft -= scrollAmount;
        } else {
          carouselRef.current.scrollLeft += scrollAmount;
        }
      }
    };

  return(
      <div className="w-full text-left">
  <div className="relative">
  <button
      onClick={() => handleScroll('left')}
      className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 focus:outline-none">
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-second group-hover:bg-white/50">
        <svg
          className="w-4 h-4 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 1 1 5l4 4"
          />
        </svg>
        <span className="sr-only">Previous</span>
      </span>
    </button>
  <div className="scrollbar-hide flex flex-nowrap overflow-x-auto scroll-smooth gap-4" ref={carouselRef}>
          {img.map(({imgUrl, alt}, index) => (
            <img 
            key={index}
              src={imgUrl} 
              alt={alt} 
              className="w-24 h-24 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300" 
            />
          ))}
  </div>
  <button
      onClick={() => handleScroll('right')}
      className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 focus:outline-none"
    >
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-second group-hover:bg-white/50">
        <svg
          className="w-4 h-4 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 9l4-4-4-4"
          />
        </svg>
        <span className="sr-only">Next</span>
      </span>
    </button>
</div>

      </div>

  )
}
export default CarrouselImg;

CarrouselImg.propTypes = {
    img: PropTypes.arrayOf(string), 
  };