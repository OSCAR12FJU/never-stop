import PropTypes from "prop-types";

export const ItemsNavBar = ({product} ) => {
    const {image, title, price} = product;
    return(
    <div className="flex items-center justify-between p-4 mb-1 border-b-[0.1rem] w-full gap-4 ">
        <div className="flex items-center">
         <img src={image}  alt='product-image' className="h-20 w-20 rounded-lg"/>    
        </div>

        <div className="flex flex-col w-full  justify-center pl-4">
        {/* <div className="flex flex-col "> */}
         <a className="text-sm md:text-md font-normal text-[#212229]">{title.slice(0,15)}</a>
        <span className="text-base text-[#212229] font-semibold">
            ${price}
        </span>
        {/* </div> */}
        </div>
     

    </div>

    )
}

ItemsNavBar.propTypes = {
    product: PropTypes.shape({
     id: PropTypes.number,
     image: PropTypes.string.isRequired,
     title: PropTypes.string.isRequired,
     price: PropTypes.number.isRequired,
   }).isRequired,     
};