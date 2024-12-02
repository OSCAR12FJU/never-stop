import PropTypes from "prop-types";
import { SectionContainer } from "./sections/SectionContainer";

export const CategoryCard = ({title }) =>{
    return(
    <>
    <SectionContainer>
    <div className="w-full max-w-sm bg-white mt-4 flex flex-col justify-center items-center">
     <img className="w-48 md:w-60" src="https://tecstorearg.com/cdn/shop/files/6a3e6da30276f7be1c59e1e45347229f.jpg?v=1730399710&width=1000" alt="product image" />
    <div className="flex justify-start items-start p-5">
     <button className="flex justify-center items-center text-xl md:text-2xl font-normal">{title}<svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg></button>
    </div>
    </div>
    </SectionContainer>
    </>
    )
}

CategoryCard.propTypes = {
    imgUrl: PropTypes.string, 
    title: PropTypes.string, 
  };