

import PropTypes from "prop-types";
import { CartIcon } from "../../icons/CartIcon";
import { HamburgueIcon } from "../../icons/HamburgueIcon";
import { SoportIcon } from "../../icons/SoportIcon";
import SearchBar from "../SearchBar";
import NeverStop from "../../files/NeverStop.png";
import { NavBar } from "../NavBar";

const Header = ({notHome, setOpenSideBar, setOpenSideBar1}) =>{

const handleOpen = () =>(
  setOpenSideBar((prevData) => !prevData)
)
const handleOpen1 = () =>(
  setOpenSideBar1((prevData) => !prevData)
)

return(
<>
<nav className="bg-[#212229] fixed w-full z-20 top-0 start-0 z-40 ">
  <div className="max-w-6xl flex flex-wrap items-center justify-between mx-auto p-4 z-40 md:border-b md:border-gray-500">
    <button onClick={()=> handleOpen()} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden " aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <HamburgueIcon />
    </button>

  <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src={NeverStop} className="w-14" alt="NeverStop Logo" />
  </a>
  
  
<div className="flex justify-end md:order-2 md:space-x-6 space-x-2 rtl:space-x-reverse">
  <a className="inline-flex flex-col items-center justify-center group lg:block hidden cursor-pointer">
    <SoportIcon className="h-8 w-8 mx-auto" />  {/* Ajusta el tamaño del ícono */}
    <span className="text-xs text-white font-md group-hover:text-white-600">Contactanos</span>
  </a>
  <a 
  className="inline-flex flex-col items-center justify-center  group cursor-pointer"
  onClick={()=> handleOpen1()}>
    <CartIcon className="h-8 w-8 mx-auto"/>  {/* Ajusta el tamaño del ícono */}
    <span className="text-xs text-white font-md group-hover:text-blue-600 lg:block hidden mt-1">Mis compras</span>

  </a>
</div>

  {!notHome && <div className="items-center justify-center hidden w-full md:flex md:w-auto md:order-1 md:flex-grow">
   <SearchBar />
  </div> }
  
  </div>

  {
  !notHome && (
    <NavBar />
  )
}

</nav>

{
  !notHome && (

 <div className="items-center mt-4 justify-center flex max-w-6xl p-4 w-full md:hidden pt-20 bg-[#212229]">
   <SearchBar />
</div>
  )
}
</>
)
}
export default Header;


Header.propTypes = {
  notHome: PropTypes.bool, 
  setOpenSideBar: PropTypes.func, 
  setOpenSideBar1: PropTypes.func, 
};