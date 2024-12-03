import PropTypes from "prop-types";

export const NotificationItemCart = ({title, price, image, onButtonClick}) =>{
    return(
        <>
        <div className={`fixed bg-white top-0 right-0 rounded-bl-lg rounded-br-lg px-1 z-40 transition-transform py-2 duration-500 ease-in-out shadow-lg`}>
        <button
          type="button"
          data-drawer-hide="drawer-form"
          onClick={onButtonClick}
          aria-controls="drawer-form"
          className="rounded-lg text-md w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center px-3 py-3 bg-[#212229]"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        {/* -------------------------------- */}
        <div className="flex items-center justify-center p-4">
        <div className="flex items-center gap-1">
            <img src={image}  alt='product-image' className="h-20 w-20 rounded-lg"/>
        </div>
        <div className="flex justify-center items-start flex-col text-start ml-3">
          <a className="text-base font-semibold text-[#212229]">{title.slice(0,20)}</a>
          <span className="text-lg text-[#212229] font-bold">
           ${price}</span>
          <span className="text-sm font-bold text-[212229] ">Agregado correctamente al carrito!</span>
             
         </div>
         </div></div>
        </>

    )
}


NotificationItemCart.propTypes = {
    title: PropTypes.string, 
    price: PropTypes.number, 
    image: PropTypes.string, 
    onButtonClick: PropTypes.func, 
  };