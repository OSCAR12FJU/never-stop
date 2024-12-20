import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useAuth } from "./sections/SectionContext";
// import { getProductCateIndiv } from "../api/api";
import { getProductCateIndiv } from "../api/productsFetch";

export const NavBar = ({className}) =>{
    const {category} = useAuth();
    const [seleCatNav, setSeleCatNav] = useState("");
    const [selecObj, setSelecObj] = useState([]);

    const handleClick = (e, item) =>{
        e.preventDefault();
        setSeleCatNav(item);
    }

    useEffect(() => {
        const fetchCategory = async () =>{
            if (seleCatNav.length > 0 ){
              try{
                const navCategory = await
                getProductCateIndiv(seleCatNav);
                if (navCategory && Array.isArray(navCategory.products)){
                    setSelecObj(navCategory.products);
                    console.log("infromaciòn desde el sidebar",navCategory);
                }else{
                 console.error("Respuesta inesperada", navCategory);    
                 setSelecObj([]);
                }
               }catch(error){
                console.error("error al obtener los products:", error);
               }
            }

        };
        fetchCategory();
      }, [seleCatNav]);


    return(
    // <SectionContainer>


    <nav className="bg-[#212229]">
    <div className={`max-w-screen-xl hidden md:flex justify-center items-center px-4 py-3 mx-auto ${className}`}>
        <div className="flex items-center">
            <ul className="flex flex-row font-normal text-white mt-0 space-x-8 rtl:space-x-reverse text-sm md:text-md">
                {
                    category.map((item, index) =>(
                <li key={index} className="relative group">
                    <a href="#" onMouseEnter={(e) => handleClick(e, item)}className="flex justify-center items-center" aria-current="page">{item}<svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m1 1 4 4 4-4"/>
                    </svg>
                    </a>
                <div className="absolute left-0 hidden group-hover:block z-10 font-normal bg-white divide-y divide-gray-100 rounded-md shadow w-44 ">
                 <ul className="py-2 text-base text-[#212229] font-normal" aria-labelledby="dropdownLargeButton">
                    {
                        selecObj.map((item, index) =>(
                        <li key={index}>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100">{item.title.slice(0,15)}</a>
                        </li>

                        ))
                    }

        </ul>
        </div>
        </li>
                    ))
                }
           


       </ul>
        </div>
    </div>
        
</nav>
    // </SectionContainer>

    )
}


NavBar.propTypes = {
    className: PropTypes.string, 
  };



