import PropTypes from "prop-types";
import { CartCardIcon } from "../icons/CartCardIcon";
import { EyeCardIcon } from "../icons/EyeCardIcon";
import { Link } from "react-router-dom";
import { useAuth } from "./sections/SectionContext";

export const CardProduct = ({product}) =>{

    const {setAllProduct, allProduct} = useAuth()
    console.log("cardProduct ",allProduct)

    const {image, title, price} = product;


    const handleProduct = (e, product) => {
        e.preventDefault();
        const productExists = allProduct.some((item) => item.id === product.id);
        if (productExists) {
            const updatedProducts = allProduct.map((item) =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
            setAllProduct(updatedProducts);
        } else {
            const productWithQuantity = { ...product, quantity: 1 };
            setAllProduct((prevProducts) => [...prevProducts, productWithQuantity]);
        }
    };
    // const product = { id, image, title, price, description, category};

    // const handleProduct = (e, product) =>{
    //     e.preventDefault();
    //     const existingProduct = allProduct.find((item) => item.id === product.id);

    //     if (existingProduct){
    //         const validateProduct = allProduct.map((item) =>
    //         item.id === product.id 
    //         ? {...item, quantity: item.quantity + 1}
    //         : item
    //     );
    //     setAllProduct(validateProduct);
    //     }else{
    //         const productWithQuantity = { ...product, quantity:1 };
    //         // Actualizar el estado `allProduct`
    //         setAllProduct((prevProducts) => [...prevProducts, productWithQuantity]);
    //     }

    //  }

    return(
        <div className="w-full max-w-sm bg-white rounded-lg flex flex-col items-center group cursor-pointer hover:border-b-0 md:px-5 px-3 md:hover:shadow-lg rounded">
        {/* <div className="w-full max-w-xs h-48 overflow-hidden rounded-t-lg 8 pt-4 h-48 mb-4 md:px-4 px-0 ">  */}
         <img className=" md:px-4 px-0 max-w-[12rem] rounded-t-lg max-h-48 pt-4 h-48 object-cover mb-4" src={image} alt="product image" />
        {/* </div> */}
        
        <div className="flex flex-col items-center pb-2 ">
            <h4 className="text-md font-normal text-[#424BCB] leading-tight mb-3">{title.slice(0,18)}</h4>
            <div className="flex justify-center items-center gap-2"> 
                <span className="text-lg font-normal text-[#424BCB] mb-2 line-through">${price}</span>
                <span className="text-2xl font-bold text-gray-900 mb-2  ">${price}</span>
            </div> 
        </div>
        <hr className="w-full border-[#B9BDEC] hidden border-[0.0.2px] md:block group-hover:hidden"></hr>

        <div className="flex justify-center md:opacity-0 group-hover:opacity-100  opacity-100 transition-opacity duration-300 rounded md:px-5 px-3 pb-2">
            <a  className="text-white bg-[#212529] hover:bg-[#212529] focus:ring-4 focus:outline-none focus:ring-gray-600 font-semibold rounded-full text-sm px-4 py-2.5 text-center inline-flex items-center me-2"
             onClick={(e) => handleProduct(e, product)} href="#"
             >
                <CartCardIcon className="hidden md:flex w-3.5 h-3.5 me-2"/>
                COMPRAR
                </a>
                <Link  to={`/products/${product.id}`}>
                <a className="text-gray-900 bg-white font-bold rounded-full text-sm px-2 md:px-4 py-2.5 text-center flex justify-center items-center border border-[#212229]">
                <EyeCardIcon className="w-5 h-5"/>
                <span className="hidden md:flex ">VER</span>
                </a>
                </Link>
            </div>
    </div> 
    )
}

CardProduct.propTypes = {
   product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
  };
