
import { CardProduct } from "../CardProduct";
import { useAuth } from "./SectionContext";
import "../.././index.css"
import { Snipper } from "../Snipper";


export const CarrouselProducts = () =>{
    const {products, isLoading}= useAuth();

    return(
    <div className="w-full text-center">
    <h3 className="text-3xl md:text-4xl font-bold text-[#424BCB] mb-8"> Productos Destacados</h3>


    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {products.slice(0,8).map((product ,index) => (
        <CardProduct key={index} product ={product} />
      ))}
    </div>
      {isLoading && (
          <div className="inset-0 bg-white bg-opacity-50 flex items-center justify-center z-10">
            <Snipper />
          </div>
        )}
    </div>


    )
}



