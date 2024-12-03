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
        <div className="w-full max-w-sm bg-white rounded-lg flex flex-col items-center group cursor-pointer hover:border-b-0 md:px-5 px-3 hover:shadow-lg rounded">
         <img className="md:px-4 px-0 rounded-t-lg max-h-card pt-4 h-48 object-cover" src={image} alt="product image" />
        
        <div className="flex flex-col items-center pb-4">
            <h4 className="text-md font-semibold  text-gray-900 leading-tight dark:text-white mb-3">{title.slice(0,20)}</h4>
            <div className="flex justify-center items-center">   
                <span className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">${price}</span>
                <span className="md:text-base text-sm font-medium text-[#41BD7D] mb-2 px-2">%{Math.floor(Math.random()*(50-10 +1))+10} OFF</span>
            </div> 
        </div>
        <div className="flex justify-center md:opacity-0 group-hover:opacity-100  opacity-100 transition-opacity duration-300 rounded md:px-5 px-3 pb-2">
            <a  className="text-white bg-[#212529] hover:bg-[#212529] focus:ring-4 focus:outline-none focus:ring-gray-600 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center me-2"
             onClick={(e) => handleProduct(e, product)} href="#"
             >
                <CartCardIcon className="w-3.5 h-3.5 me-2"/>
                Comprar
                </a>
                <Link  to={`/products/${product.id}`}>
                <a className="text-gray-900 bg-white font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center me-2 ">
                <EyeCardIcon className="w-4 h-4 me-2"/>
                <span className="hidden md:flex">Ver</span>
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
