import PropTypes from "prop-types"
import { useAuth } from "./sections/SectionContext";


//Condificación de image para poder manejarlo, chequeo de que cada info del input se este recibimiendo en el estado y mejor manejo del estaod en repartición de archs

export const ModalNewProduct = ({ handleSubmit, handleChange, closeModal, className}) =>{
    const {formData, categoryProduct} = useAuth();
    console.log("categoria",categoryProduct);

    return(
        <div className={`flex fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] ${className}`}>
            <div className="relative p-4 w-full md:max-w-5xl">
                {/* <!-- Modal content --> */}
        

        <div className="relative bg-white rounded-lg shadow ">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                <h3 className="text-lg font-semibold text-gray-900 ">
                    Create New Product
                </h3>
                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center " data-modal-toggle="crud-modal" onClick={closeModal}>
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            <form action="/api/product/insert" method="post" encType="multipart/form-data" className="p-4 md:p-5" onSubmit={handleSubmit} >
                <div className="grid gap-4 mb-4 grid-cols-2">
                    <div className="col-span-2">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Nombre del Producto</label>
                        <input 
                        type="text"
                        name="title"
                        id="title" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                        value={formData.title}
                        onChange={handleChange}
                         required />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 ">Precio</label>
                        <input 
                        type="number" 
                        name="price" 
                        id="price" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " 
                        value={formData.price}
                        onChange={handleChange}
                        required="" />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 ">Categoria</label>
                        <select 
                        id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        >                            
                        <option selected="">Select category</option>
                        {
                            categoryProduct.map((cat, index) =>(
                                <option key={index} value={cat}>{cat}</option>
                            ))
                        }
                        </select>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-900 ">Cantidad</label>
                        <input 
                        type="number" 
                        name="quantity" 
                        id="quantity" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " 
                        value={formData.quantity}
                        onChange={handleChange}
                        required="" />
                    </div>
                    <div className="col-span-2 sm:col-span-1">  
                    <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="file_input">Subir Imagen</label>
                    <input 
                    className="block w-full text-sm text-gray-900 rounded-lg cursor-pointer p-1.5 bg-gray-50 border border-gray-300" 
                    id="image" 
                    name="image"
                    type="file"
                    accept="image/png, image/jpeg, image/jpg, image/gif"
                    onChange={handleChange}
                    />
                    <p className="mt-1 text-xs text-gray-500 " 
                    id="image">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                    </div>
                    <div className="col-span-2">
                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 ">Product Description</label>
                    <textarea
                    id="description"
                    name="description"
                    rows="4" 
                    onChange={handleChange}
                    value={formData.description}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Write product description here"></textarea>                    
                    </div>
                </div>
                <button type="submit" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                    Add new product
                </button>
            </form>
        </div>
    </div>
</div> 
    )
}

ModalNewProduct.propTypes = {
    closeModal: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    category: PropTypes.arrayOf(PropTypes.string).isRequired,
    className: PropTypes.string,
}