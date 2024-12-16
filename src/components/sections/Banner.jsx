import PropTypes from "prop-types"

export const Banner = ({notHome}) =>{ 
    return(
        <div className={`relative w-full md:mt-20`}>
      {/* Carousel wrapper */}
      {!notHome && (
        <>
      <div className={`relative h-56 overflow-hidden md:h-96 `}>
        {/* {images.map((image, index) => ( */}
          <div
            className={`absolute block w-full h-full transition-opacity duration-700 ease-in-out`}
          >
            <img
              src="https://tecstorearg.com/cdn/shop/files/Banner_Web_PC_3x_e70c708a-9ffd-4d91-a109-a8ee8409c53a.png?v=1729873326&width=1100"
              className="w-full h-full object-cover"
              alt='banner home'
              // alt={`Slide ${index + 1}`}
            />
          </div>

        {/* ))} */}
      </div>
          {/* <div className="flex justify-center items-center mx-auto bg-[#334FB4] py-8 ">
            <div className="flex gap-2 rounded-lg shadow py-4 justify-center items-center bg-white px-10 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 md:w-12 md:h-12 stroke-red-500 fill-red-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"> 
            <path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11"></path> 
        </svg>

            <h3 className=" text-xl md:text-3xl text-[#334FB4] font-bold ">¡Descubrí nuestras ofertas!</h3>
            </div>
          </div> */}
        </>
      )}
    </div>
    )
}

Banner.propTypes = {
  notHome: PropTypes.bool, 
}