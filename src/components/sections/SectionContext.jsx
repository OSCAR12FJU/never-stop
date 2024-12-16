import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react"
// import { getProducts } from "../../api/API.js";
import { getProducts, getProductsCategory } from "../../api/productsFetch";


export const AuthContext = createContext(undefined);

export const SectionContext = ({children})=>{

    const [category, setCategory] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [categoryProduct, setCategoryProduct] = useState([]);
    const [formData, setFormData] = useState({
      title: "",
      price: "",
      description: "",
      quantity: "",
      category: "",
      image: null,
  })
    const [showNotification, setShowNotification] = useState(false);
    const [lastProduct, setLastProduct] = useState(null);
    const [allProduct, setAllProduct] = useState([]);
    const [prevLength, setPrevLength] = useState(allProduct.length);
    const [products, setProducts] = useState([]);
    const [token, setToken] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(true);



  useEffect(() =>{
      const fetchProducts =  async() =>{
        try{
          const response = await getProducts();
          if (response?.products && Array.isArray(response.products)){
            setProducts(response.products);
            console.log("infromaciòn desde el context",response.products);
        }else{
         console.error("Respuesta inesperada", response);
         setProducts([]);
        }
          // setProducts(response)
          // console.log(response);
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
            setIsLoading(true);
             try{
               const data = await getProductsCategory();

               if (data?.category && Array.isArray(data.category)){
                   setCategory(data.category);
                   console.log("infromaciòn desde el context",data.category);
               }else{
                console.error("Respuesta inesperada", data);
                setCategory([]);
               }

             }catch(error){
               console.error('Error fetching category:', error)
             }finally{
              setIsLoading(false);
             }
           };
           console.log("peticiòn:",fetchProducts)
           fetchProducts()
         }, [])


    return(
    <AuthContext.Provider value={{isLoading, setIsLoading,categoryProduct, setCategoryProduct,isModalOpen, setIsModalOpen,token, setToken, formData, setFormData,category, products, setProducts, setCategory, allProduct, setAllProduct, showNotification, lastProduct, setShowNotification}}>
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