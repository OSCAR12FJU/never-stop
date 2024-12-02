import PropTypes from "prop-types";
import { useRef } from "react";
import { CardProduct } from "./CardProduct";

export const CarrouselProduct = ({products, title}) =>{

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
        <h3 className="md:text-4xl text-3xl font-bold text-black mb-8"> {title}</h3>

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
    {products.slice(0,5).map(({ image, title, price, description, category } ,index) => (
        <CardProduct key={index}  imgUrl={image}title={title} price={price} description={description} category={category} />
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


CarrouselProduct.propTypes = {
    title: PropTypes.string, 
    products: PropTypes.object, 
   
  };

