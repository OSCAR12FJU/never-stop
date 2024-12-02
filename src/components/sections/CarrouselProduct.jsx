// import { getProducts } from "../../api/api";
import { useRef } from "react";
import { CardProduct } from "../CardProduct";
import { useAuth } from "./SectionContext";
import "../.././index.css"


export const CarrouselProducts = () =>{
    const carouselRef = useRef(null);
    const {products}= useAuth();

      const handleScroll = (direction) => {
        if (carouselRef.current) {
          const scrollAmount = 300; 
          // Ajusta la cantidad de desplazamiento
          if (direction === 'left') {
            carouselRef.current.scrollLeft -= scrollAmount;
          } else {
            carouselRef.current.scrollLeft += scrollAmount;
          }
        }
      };
    // const handleScroll = (direction) => {
    //     const elements = carouselRef.current?.children;
    //     if (elements) {
    //       if (direction === "left" && elements[0]) {
    //         elements[0].scrollIntoView({ behavior: "smooth", inline: "start" });
    //       } else if (direction === "right" && elements[elements.length - 1]) {
    //         elements[elements.length - 1].scrollIntoView({ behavior: "smooth", inline: "end" });
    //       }
    //     }
    //   };

    return(
    <div className="w-full text-left">
    <h3 className="md:text-4xl text-3xl font-bold text-black mb-8"> Productos Destacados</h3>

    <div className="relative">
    <button
        onClick={() => handleScroll('left')}
        className="absolute md:hidden top-0 left-0 z-30 flex items-center justify-center h-full px-4 focus:outline-none">
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#212229] group-hover:bg-[#212229]">
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
    <div className="scrollbar-hidden md:hidden flex flex-nowrap overflow-x-scroll scroll-smooth gap-4" ref={carouselRef}>
      {products.slice(0,6).map(( product,index) => (
          <CardProduct key={index} product={product} />
      ))}
    </div>
    <div className="md:grid hidden md:grid-cols-4 gap-4">
      {products.slice(0,8).map((product ,index) => (
          
          <CardProduct key={index} product ={product} />
      ))}
    </div>

    <button
        onClick={() => handleScroll('right')}
        className="absolute md:hidden top-0 right-0 z-30 flex items-center justify-center h-full px-4 focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#212229] group-hover:bg-[#212229]">
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



