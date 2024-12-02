import PropTypes from "prop-types";
import { ItemProductCart } from "./ItemProductCart";
import { NotificationItemCart } from "./NotificationItemCart";
import { useAuth } from "./sections/SectionContext";

export const SideBarCart = ({openSideBar1, setOpenSideBar1}
) => {
    const {allProduct,lastProduct, showNotification, setShowNotification} = useAuth();

    console.log("contenido del allProduct",allProduct);

   const handleOpen = () =>setOpenSideBar1(prevData => !prevData)

  const calcularTotal = (items)=>{
    const total = items.reduce((total, product) => {
        const productTotal = product.quantity > 1 ? product.price * product.quantity : product.price
       return total + productTotal;
    }, 0);
    const resultTotal = Math.round(total)
    return resultTotal
  }

  

  const handleItemCart = () =>{
    setShowNotification(false)
  }
  const total = calcularTotal(allProduct);
  const productDetails = allProduct
  .map(
    (product) =>
      `\nNombre: ${product.title}, \nCantidad: ${product.quantity}, \nPrecio: $${product.price}`
  )
  .join("\n"); // Usa "\n" para agregar saltos de línea reales.

const message = `Hola, Equipo de NeverStop!\nQuiero comprar los siguientes productos:\n${productDetails}\n\nTotal: $${total}`;

const whatsappURL = `https://api.whatsapp.com/send?phone=1165123948&text=${message.replace(/\n/g, "%0A")}`;

  return (
    <>

    {showNotification && lastProduct &&(
      <NotificationItemCart 
      image={lastProduct?.image}
      title={lastProduct?.title}
      price={lastProduct?.price}
      onButtonClick={handleItemCart}
      />
    )}
      <div className={`${allProduct.length >= 1 ? "sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/3": "w-[20rem]"} fixed bg-white top-0 right-0 px-5 z-40 transition-transform rounded-bl-lg py-6 max-h-screen overflow-y-auto ${openSideBar1 ? 'translate-x-0' : 'translate-x-full'} shadow-2xl`}>
        <h5 
          id="drawer-label"
          className="inline-flex items-center mb-3 text-xl font-bold text-[#21229]">
          Carrito de Compras
        </h5>
        <button
          type="button"
          data-drawer-hide="drawer-form"
          onClick={() => handleOpen()}
          aria-controls="drawer-form"
          className="bg-[#212229] rounded-md text-md w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center"
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

      <div className="">
        {allProduct.map((product, index) =>(
            <ItemProductCart key={index} product={product}/>
        ))}
    </div>
    <div className="flex items-center justify-between p-4 mb-2">
      <div className="flex items-center ">
        <h3 className="text-2xl text-[#212229] font-bold">Total:</h3>
       </div>
    
      <div className="mx-4 rounded-full flex w-12 gap-2 justify-center items-end">
        <div>
          <span className="text-2xl text-[#212229] font-bold"> ${calcularTotal(allProduct)}.00
          </span>
        </div>
    </div> 

    </div>
    {/* <button className="bg-[#212229] text-white  w-full rounded-md p-1 font-semibold">Pagar Ahora</button> */}
    <a 
      onClick={() => window.open(whatsappURL, "_blank")}
      rel="noopener noreferrer"
       className="bg-[#01BC39] flex gap-2 items-center font-semibold text-white justify-center text-center px-4 py-4  md:px-6 md:py-2 rounded-md">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-6 h-6 md:w-8 md:h-8" stroke="white" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" strokeWidth="2">
      <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
      <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path>
      </svg>
      Comprar Ahora
      </a>
    </div>

    </>
  );
};


SideBarCart.propTypes = {
    openSideBar1: PropTypes.bool, 
    setOpenSideBar1: PropTypes.func, 
  };
