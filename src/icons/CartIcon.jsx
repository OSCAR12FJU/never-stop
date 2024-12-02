import PropTypes from "prop-types";
import { useAuth } from "../components/sections/SectionContext";

export const CartIcon= ({className = ""}) =>{
  const {allProduct} = useAuth();
  return(
  <>
  <div className="relative">
  <svg xmlns="http://www.w3.org/2000/svg" className={`${className}`}viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="#212229"> 
  <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path> <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path> <path d="M17 17h-11v-14h-2"></path> <path d="M6 5l14 1l-1 7h-13"></path> </svg> 

  <div className="absolute inline-flex items-center justify-center w-4 h-4  text-[0.6rem] font-bold text-white bg-[#212229]  rounded-full -top-1 -end-2">{allProduct.length}
  </div>
  </div>
  </>

)}

CartIcon.propTypes = {
    className: PropTypes.string, 
  };