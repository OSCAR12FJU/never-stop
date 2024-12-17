import { useEffect, useState } from "react"
import { ContainInventory } from "../ContainInventory"
import { ModalNewProduct } from "../ModalNewProduct"
import { SectionContainer } from "../sections/SectionContainer"
import { useAuth } from "../sections/SectionContext"
import { getCategoryProducts } from "../../api/productsFetch"

export const EditPage = () =>{

    //Searbar realizar filtrado por nombre, categorias colocal opciones y crear opciones, un poco de ediciòn, y sincronizaciòn con info de prdocutos ingresados y cantidad de images.

    //Ediciòn de la secciòn para marcar ediciones.
    

    //Adaptar añadir productos para movile.

    //Rutas privada autorizaciòn.



    const isFadingOut = false;
    const [error, setError] = useState("");
    const {setCategoryProduct} = useAuth();

    const {formData, setFormData, isModalOpen, setIsModalOpen} = useAuth();

    useEffect(() =>{
        const fetchCategorys =  async() =>{
          try{
            const response = await getCategoryProducts();
            if (response && response.category) {
                const {category} = response
                setCategoryProduct(category);
                console.log("respuesta de categorías", response.category);
            }else {
                console.error("La respuesta no contiene la propiedad 'category'");
              }

          }catch(error){
            console.error('Error fetching categorys:', error)
          }
        };
        fetchCategorys();
      }, [])
      
    const handleChange = (e) =>{
        const {name, value, files} = e.target;

        if(name === "image"){
            const file = files[0]; 
            // if(file && file.type.startsWith("image/")){     
                setFormData((prev) =>({
                    ...prev,
                    [name]: file,
                }));
            // }else{
            //     console.error("Por favor selecciona un archivo de imagen válido.")
            // }
        }else{
            setFormData({
                ...formData,
                [name]: value,
            });
        }

     }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        console.log(formData);
        const formContent = new FormData();
        formContent.append("title", formData.title);
        formContent.append("price", formData.price);
        formContent.append("description", formData.description);
        formContent.append("quantity", formData.quantity);
        formContent.append("category", formData.category);
        formContent.append("image", formData.image);

        try{
            const response = await fetch("https://backend-neverstop.onrender.com/api/product/insert", {
                method: "POST",
                body: formContent,
              });
              const content = response;
              setError(content)
              
            if(!response.ok){
                console.log("content", error)
                throw new Error("Error en la solicitud");
            }
        const data = await response.json();
        console.log("Producto creado con exito:", data);

        setFormData({
            title: "",
            price: "",
            description: "",
            quantity: "",
            category: "",
            image: null,
          });
        console.log(formData);
        setIsModalOpen(false);


        }catch(error){
        console.error("Error al enviar los datos:", error);
        // console.error("Contenido:", content);
        }
     }

    return(
        <>
    <SectionContainer>
<div className="p-4 ">
    <h2 className="font-bold text-2xl md:text-3xl">Inventario</h2>
    <div className="flex mt-4 justify-start items-center gap-4">
        <button className="p-2.5 bg-[#212229] inline-flex items-center font-medium text-white rounded-md" onClick={() => setIsModalOpen((prev) => !prev)} >
        <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
            Añadir Productos
        </button>
        <button className="p-2.5 rounded-md border shadow font-medium">
            Importar Productos
        </button>
        
    </div>
<form className="mt-4">
    <div className="flex">
        <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only">Your Email</label>

        <button id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300" type="button">All categories <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
  </svg></button>

        <div  className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
            <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Shopping</a>
            </li>
            </ul>
        </div>
        <div className="relative w-full">
            <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search" required />
            <button type="submit" className="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
  </svg></button>
        </div>
    </div>
</form>
<ContainInventory />
</div>

{isModalOpen && (
      <>
      <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-40" onClick={(prev) => setIsModalOpen(!prev)}></div>
      <ModalNewProduct  handleChange={handleChange} handleSubmit={handleSubmit} className={`${isFadingOut ? 'opacity-0' : 'opacity-100'}`} closeModal={(prev) => setIsModalOpen(!prev) } />
      </>
      ) 

      }

</SectionContainer>
        </>
    )

}