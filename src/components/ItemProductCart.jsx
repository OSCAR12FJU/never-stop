import PropTypes from "prop-types";
import { useAuth } from "./sections/SectionContext";


export const ItemProductCart =({product}) =>{
    const {allProduct, setAllProduct} = useAuth();
    const {image, title, price} = product;


    const handleRemove = (id) =>{
        const newProduct = allProduct.filter((p) => p.id !== id);
        setAllProduct(newProduct);
    }

    const handleIncrement = (id) =>{
        const newProduct = allProduct.map((p) =>
        p.id === id 
        ? {...product, quantity: product.quantity + 1}
        : product
    );
    setAllProduct(newProduct)
    }
    const handleDecrement = (id) =>{
        const newProduct = allProduct.map((p) =>
        p.id === id && product.quantity > 1
        ? {...product, quantity: product.quantity - 1}
        : product
    );
    setAllProduct(newProduct)
    }

  const currentProduct = allProduct.find((p) => p.id === product.id);
  const currentQuantity = currentProduct?.quantity || 1;

    return(
     <div className="flex items-center justify-between p-4 mb-2 border-b-[0.1rem]">
        <div className="flex items-center gap-3 ">
            <img src={image}  alt='product-image' className="h-20 w-20 rounded-lg"/>
            <div>
            <div className="rounded-full w-full mb-2">
            <a className="text-lg font-semibold text-[#212229]">{title}</a>
            </div>


        <div className="relative flex items-center max-w-[8rem]">
        <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input" className="bg-gray-100 rounded-s-md p-2 h-6 focus:ring-gray-100 focus:ring-2 focus:outline-none" onClick={() => handleDecrement(product.id)}>
            <svg className="w-3 h-3 text-[#212229]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M1 1h16"/>
            </svg>
        </button>

        <input type="text" id="quantity-input" data-input-counter data-input-counter-min="1" data-input-counter-max="50" aria-describedby="helper-text-explanation" className="bg-gray-50 border-gray-300 h-6 text-center text-[#212529] text-md font-semibold  block w-8 " value={currentQuantity} required />

        <button type="button" onClick={()=> handleIncrement(product.id)} id="increment-button" data-input-counter-increment="quantity-input" className="bg-gray-100 hover:bg-gray-200  rounded-e-lg p-2 h-6 focus:ring-gray-100 focus:ring-2 focus:outline-none">
            <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="#212529" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 1v16M1 9h16"/>
            </svg>
        </button>
    </div>


            </div>
        </div>
        <div className="mx-4 rounded-full flex flex-col w-12 gap-2 justify-center items-end">
            <div >
            <svg  onClick={() => handleRemove(product.id)} className="icon-inline w-5 h-5 cursor-pointer icon-w-12 icon-lg" fill='#212229' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M451.64,121.9c0-26.93-21.83-48.76-48.76-48.76h-48.76v-24.38c0-26.93-21.83-48.76-48.76-48.76h-97.52c-26.93,0-48.76,21.83-48.76,48.76v24.38h-48.76c-26.93,0-48.76,21.83-48.76,48.76v97.52h24.38v243.81c0,26.93,21.83,48.76,48.76,48.76h243.81c26.93,0,48.76-21.83,48.76-48.76V219.43h24.38V121.9ZM207.83,48.76h97.52v24.38h-97.52v-24.38ZM110.3,121.9H402.87v48.76H110.3v-48.76ZM378.49,463.24H134.68V219.43h48.76v219.43h48.76V219.43h48.76v219.43h48.76V219.43h48.76v243.81Z"></path></svg>
            </div>
            <div>
                <span className="text-base text-[#212229] font-bold">
                    ${price}
                </span>
            </div>
            
        </div>
    </div> 

    )
}

ItemProductCart.propTypes = {
        product: PropTypes.shape({
         id: PropTypes.number.isRequired,
         image: PropTypes.string.isRequired,
         title: PropTypes.string.isRequired,
         price: PropTypes.number.isRequired,
         quantity: PropTypes.number.isRequired,
         description: PropTypes.string,
         category: PropTypes.string,
       }).isRequired,     
  };