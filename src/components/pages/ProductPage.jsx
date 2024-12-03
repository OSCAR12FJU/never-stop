
import { useEffect, useState } from "react";
import { getProductInd, imgMiniature } from "../../api/productsFetch";
// import { Products } from "../sections/Products";
import { SectionContainer } from "../sections/SectionContainer";
import {useParams } from "react-router-dom";
import { useAuth } from "../sections/SectionContext";

const ProductPage = () =>{

  const {id} = useParams()
  const {allProduct, setAllProduct} = useAuth()

  const [product, setProduct] = useState({
  id: null,
  title: '',
  description: '',
  price: 0,
  quantity: 1,
  image: '',
   })
  
  useEffect(() =>{
    const fetchProducts = async()  =>{
      try{
        const response = await getProductInd(id);
        if(!response){
          throw new Error("Producto no encontrado");
        }

        const existingProduct = allProduct.find((item) => item.id === id);

        if(existingProduct){
          setProduct({
            existingProduct
          })
        }else{
          setProduct({
            ...response,
            quantity: 1,
          });
        }

      }catch(error){
        console.error("Error al obtener el producto",error);
      }
    }
    fetchProducts();
  }, [id]);

  const handleIncrement = () => {
    setProduct((prevProduct) => ({
        ...prevProduct,
        quantity: prevProduct.quantity + 1,
    }));
};

const handleDecrement = () => {
    setProduct((prevProduct) => ({
        ...prevProduct,
        quantity: prevProduct.quantity > 1 ? prevProduct.quantity - 1 : 1,
    }));
};

//Esta funcionalidad aparte de agregar un product al array de productos seleccionados, este chequea de que no exista por que si este existe, lo que hace es que cambia su propiedad de CANTIDAD para que se vaya agregando las veces que se quiere sumar uno más.
const handleProduct = (e , product) =>{
  e.preventDefault();
  const existingProduct = allProduct.find((item) => item.id === product.id)

  if (existingProduct){
      const validateProduct = allProduct.map((item) =>
      item.id === product.id 
      ? {...item, quantity: item.quantity + 1}
      : item);

  setAllProduct(validateProduct);
  setProduct({ ...product, quantity: existingProduct.quantity + 1});
  }else{
      const productWithQuantity = { ...product, quantity:1 };

      // Actualizar el estado `allProduct`
      setAllProduct(prevProducts => [...prevProducts, productWithQuantity]);
      // setProduct(prevProducts => [...prevProducts, productWithQuantity]);
      setProduct(productWithQuantity);
    
  }
}

const handleBuyNow = (e, product) => {
  e.preventDefault();

  const total = product.quantity * product.price;

  const productDetails = `
Nombre: ${product.title}, 
Cantidad: ${product.quantity}, 
Precio: $${product.price}`;
  
  const message = `Hola, Equipo de NeverStop!
Quiero comprar los siguientes productos:
${productDetails}

Total: $${Math.round(total)}`;

  const whatsappURL = `https://api.whatsapp.com/send?phone=541165123948&text=${encodeURIComponent(message)}`;
  
  window.open(whatsappURL, "_blank");
};


    return(
  <SectionContainer className="mt-28 md:mt-24 px-4 md:px-10">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 ">
    <div className="px-4 flex flex-col justify-center items-center overflow-hidden">
              <div className="flex flex-col justify-center items-start">
            <img 
              src={product?.image}
              className="w-[14rem] rounded-lg mb-4" 
              id="mainImage" 
            />
        <div className="flex flex-row gap-2 py-4 justify-center items-center">
            {imgMiniature.map(({ imgUrl, alt }, index) => (
              <img 
              key={index}
                src={imgUrl} 
                alt={alt} 
                className="w-24 h-24 object-cover cursor-pointer opacity-60 hover:opacity-100 transition duration-300" 
              />
            ))}
          </div>
        </div>
    </div>
   
        <div  className="w-full p-4 relative">
          <h2 className="text-3xl font-bold mb-2">{product?.title.slice(0,15)}</h2>
          <p className="text-gray-600 mb-4">SKU: WH1000XM4</p>
          <div className="mb-4 flex justify-between ">
           <div className="">
            <span className="text-4xl font-bold mr-2">${product?.price}</span>
            <span className="text-gray-500 line-through">$399.99</span>
            </div>
            <div className="mb-6">
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">Cantidad:</label>
            <div className="relative flex items-center max-w-[8rem]">
        <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input" className="bg-gray-100 rounded-s-md p-2 h-6 focus:ring-gray-100 focus:ring-2 focus:outline-none" onClick={() => handleDecrement(product.id)}>
            <svg className="w-3 h-3 text-[#212529] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M1 1h16"/>
            </svg>
        </button>

        <input type="text" id="quantity-input" data-input-counter data-input-counter-min="1" data-input-counter-max="50" aria-describedby="helper-text-explanation" className="bg-gray-50  border-gray-300 h-6 text-center text-[#212529] text-md font-semibold  block w-8 " value={product.quantity} readOnly required />
        

        <button type="button" onClick={()=> handleIncrement(product.id)} id="increment-button" data-input-counter-increment="quantity-input" className="bg-gray-100 hover:bg-gray-200  rounded-e-lg p-2 h-6 focus:ring-gray-100 focus:ring-2 focus:outline-none">
            <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="#212529" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 1v16M1 9h16"/>
            </svg>
        </button>
    </div>
          </div>
          </div>
  
          <div className="flex justify-start items-center gap-2 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="#212229" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
          <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
          <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
          <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5"></path>
          <path d="M3 9l4 0"></path>
          </svg>
          <span className="font-bold text-xl">Envíos Gratis</span>
  
          </div>
  
  
          <div className="flex mb-6 gap-4">
            <button
             className="bg-[#212229] flex gap-2 items-center text-white px-4 py-4 md:px-4 md:py-2 rounded-md text-[0.9rem] md:text-medium font-semibold" onClick={(e) => handleProduct(e, product)}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-6 h-6 md:w-8 md:h-8" stroke="white" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" strokeWidth="2"> <path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path> <path d="M12.5 17h-6.5v-14h-2"></path> <path d="M6 5l14 1l-.86 6.017m-2.64 .983h-10.5"></path> <path d="M16 19h6"></path> <path d="M19 16v6"></path> </svg>  
              Añadir al carrito
              </button>
  
            <button
             className="bg-[#01BC39] flex gap-2 items-center font-semibold text-white px-4 py-4 text-[0.9rem] md:text-medium md:px-6 md:py-2 rounded-md " 
             onClick={(e) => handleBuyNow(e,product)}>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-6 h-6 md:w-8 md:h-8" stroke="white" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" strokeWidth="2">
              <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
              <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path>
              </svg>
              Comprar Ahora
              </button>
                      
            <a className="flex gap-2 items-center py-2 rounded-md absolute top-0 right-0">
              <span className="bg-red-100 text-red-800 text-sm font-medium px-2 py-0.5 rounded gap-2">Quedan solo 5</span>
            </a>
          </div>
          <hr className="text-gray-600"></hr>
  
          <div className="mt-4 font-normal text-lg text-[#212229]">
          <p>{product?.description}</p>
          </div>
        </div>
    </div>
    {/* <Products /> */}

  </SectionContainer>

    )
}

export default ProductPage;