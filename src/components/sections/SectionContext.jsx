import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react"
import { getProducts, getProductsCategory } from "../../api/api";

export const AuthContext = createContext(undefined);

export const SectionContext = ({children})=>{

    const [category, setCategory] = useState([]);
    const [showNotification, setShowNotification] = useState(false);
    const [lastProduct, setLastProduct] = useState(null);
    const [allProduct, setAllProduct] = useState([]);
    const [prevLength, setPrevLength] = useState(allProduct.length);
    const [products, setProducts] = useState([]);


  useEffect(() =>{
      const fetchProducts =  async() =>{
        try{
          const response = await getProducts();
          setProducts(response)
          console.log(response);
        }catch(error){
          console.error('Error fetching products:', error)
        }
      };
      fetchProducts();
    }, [])
    
    useEffect(() =>{
      if (allProduct.length > prevLength){
        const newProduct = allProduct[allProduct.length - 1];
        if (newProduct){
          setLastProduct(newProduct)
          setShowNotification(true)

          const timeOut = setTimeout(() => setShowNotification(false), 50000);
          return () => clearTimeout(timeOut);
        }
      }
      setPrevLength(allProduct.length);
    },[allProduct,prevLength]);


    useEffect(() =>{
           const fetchProducts =  async () =>{
             try{
               const data = await getProductsCategory();
               if (Array.isArray(data)){
                   setCategory(data || [])
                   console.log("infromaciòn desde el context",data);
               }else{
                console.error("Respuesta inesperada", data);
                setCategory([]);
               }

             }catch(error){
               console.error('Error fetching category:', error)
             }
           };
           console.log("peticiòn:",fetchProducts)
           fetchProducts()
         }, [])


    return(
    <AuthContext.Provider value={{category, products, setProducts, setCategory, allProduct, setAllProduct, showNotification, lastProduct, setShowNotification}}>
        {children}
    </AuthContext.Provider>
    )
}

//  export const useAuth = () =>{
//     const context = useContext(AuthContext);
//     if (!context){
//         throw new Error('useAuth debe ser usado dentro de un AuthProvider');
//     }
//     return context;

// }

export const useAuth= () =>{
    const context = useContext(AuthContext);
    if(!context){
        throw new Error("useAuth debe ser usado dentro de un SectionContext.")
    }
    return context;
};


SectionContext.propTypes = {
    children: PropTypes.node, 
  };

//   AuthContext.propTypes = {
//     category: PropTypes.arrayOf(PropTypes.string),
//     setCategory:PropTypes.func,

//   };