// import { NavBar } from "./NavBar";

import {  useEffect, useState } from "react";
import { useAuth } from "./sections/SectionContext";
import { getProductCateIndiv } from "../api/api";
import NeverStop from "../files/NeverStop.png"
import PropTypes from "prop-types";
// import { getProductCateIndiv } from "../api/api";


export const SideBar = ({setOpenSideBar, openSideBar}) =>{
    const {category} = useAuth();
    const [seleCategory, setSeleCategory] = useState("")
    const [selecObj, setSelecObj] = useState([])

    // const isSidebarOpen1 = true;
    // console.log("estado de:",category)
    // console.log("estado de:",seleCategory)
    // console.log("estado de obj:",selecObj)

    const handleOpen = () =>setOpenSideBar(prevData => !prevData)

    

    const handleRemove = (e) =>{
        e.preventDefault()
        // setSelecObj(prevItems => prevItems.filter(item => item.id !== id));
        setSelecObj([]);
        setSeleCategory("");
    }

    const handleClick = (e, item) =>{
        e.preventDefault();
        // setSeleCategory(prevCat => [...prevCat, item]);
        setSeleCategory(item);
        console.log("seleccione el",item);

    }
    
    useEffect(() => {
        const fetchProducts = async () =>{
            if (seleCategory.length > 0 ){
              try{
                const productCategory = await
                getProductCateIndiv(seleCategory)
                if (Array.isArray(productCategory)){
                    setSelecObj(productCategory);
                    console.log("infromaciòn desde el sidebar",productCategory);
                }else{
                 console.error("Respuesta inesperada", productCategory);
                 setSelecObj([]);
                }
               }catch(error){
                console.error("error al obtener los products:", error);
               }
            }

        };
        fetchProducts();
      }, [seleCategory]);

    // console.log("objectos seleccionados",selecObj)

    return(
        <>
<div
  className={`fixed bg-white top-0 left-0 h-screen w-80 px-5 z-40 transition-transform duration-300 pt-6 ${
    openSideBar ? "translate-x-0" : "-translate-x-full"
  } shadow-2xl`}
>
  {/* Encabezado fijo */}
  <div className="flex items-center justify-between mb-4">
    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src={NeverStop} className="w-12" alt="Never Stop" />
    </a>
    <button
      type="button"
      onClick={() => handleOpen()}
      data-drawer-hide="drawer-body-scrolling"
      aria-controls="drawer-body-scrolling"
      className="text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
    >
      <svg
        className="w-3 h-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 14"
      >
        <path
          stroke="#212229"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
        />
      </svg>
      <span className="sr-only">Close menu</span>
    </button>
  </div>

  {/* Contenido desplazable */}
  <div className="py-4 overflow-y-auto flex-1">
    <ul className="flex flex-col w-full font-semibold gap-4 mt-4 text-xl">
      {category.map((item, index) => (
        <li key={index}>
          <a
            href="#"
            className="w-full text-[#212229] flex justify-between items-center"
            onClick={(e) => handleClick(e, item)}
          >
            {item}
            <svg
              className="rtl:rotate-180 w-4 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  </div>

  {/* Sidebar secundario */}
  {selecObj && selecObj.length > 0 && (
    <div
      className={`fixed bg-white top-0 right-0 h-screen w-80 px-5 z-50 transition-transform-5 pt-6 ${
        selecObj.length > 0 ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <a
          className="flex items-center gap-2 text-xl font-bold cursor-pointer"
          onClick={(e) => handleRemove(e)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#212229"
            className="w-6 h-6"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M5 12l14 0"></path>
            <path d="M5 12l6 6"></path>
            <path d="M5 12l6 -6"></path>
          </svg>
          {selecObj[0]?.category}
        </a>
      </div>
      <div className="py-4 overflow-y-auto flex-1">
        <ul className="flex flex-col w-full font-semibold gap-4 mt-4 text-xl">
          {selecObj.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className="w-full text-[#212229] flex justify-between items-center"
              >
                {item.title.slice(0, 10)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )}
</div>
        </>
    )
}

SideBar.propTypes = {
    setOpenSideBar: PropTypes.func, 
    openSideBar: PropTypes.bool, 
  };