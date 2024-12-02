// import { useEffect, useState } from "react";
// import { getProducts } from "../../api/api";
// import { CardProduct } from "../CardProduct";
// import { SectionContainer } from "./SectionContainer";

// export const Products = () =>{

//     const [products, setProducts] = useState([])
//     useEffect(() =>{
//         const fetchProducts =  async() =>{
//           try{
//             const response = await getProducts();
//             setProducts(response)
//             console.log(response);
//           }catch(error){
//             console.error('Error fetching products:', error)
//           }
//         };
//         fetchProducts();
//       }, [])


//     return(
//     <SectionContainer className="py-10 md:pt-10">
//     <div className="w-full text-left ">
//      <h3 className="md:text-3xl text-3xl font-medium text-black mb-8">Productos Destacados</h3>
//     <div className="grid grid-cols-2 md:grid-cols-4 md:gap-4 gap-2 overflow-x-auto scroll-smooth scrollbar-hide">
//       {products.slice(0,4).map(({ id, image, title, price, description, category } ,index) => (
//           <CardProduct id={id} key={index}  imgUrl={image}title={title} price={price} description={description} category={category} />
//       ))}
//   </div>
// </div>
//     </SectionContainer>
//     )
// }

// // Products.propTypes = {
// //     imgUrl: PropTypes.string, 
// //     title: PropTypes.string, 
// //     price: PropTypes.string, 
// //     description: PropTypes.string, 
// //     category: PropTypes.string, 
// //   };
