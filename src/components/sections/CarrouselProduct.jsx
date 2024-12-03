
import { CardProduct } from "../CardProduct";
import { useAuth } from "./SectionContext";
import "../.././index.css"


export const CarrouselProducts = () =>{
    const {products}= useAuth();

    return(
    <div className="w-full text-left">
    <h3 className="md:text-4xl text-3xl font-bold text-black mb-8"> Productos Destacados</h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {products.slice(0,8).map((product ,index) => (
          <CardProduct key={index} product ={product} />
      ))}
    </div>

    </div>

    )
}



