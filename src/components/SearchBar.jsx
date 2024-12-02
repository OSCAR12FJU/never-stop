import { useState } from "react";
import { SearchIcon } from "../icons/SearchIcon";
import { ItemsNavBar } from "./ItemsNavBar";
import { useAuth } from "./sections/SectionContext";

export const SearchBar = () =>{
    const [searchValue, setSearchValue] = useState("");
    const {category, products} = useAuth();
    console.log("category desde el searchBar",category)


    const searchCategory = category.filter((item) => item.toLowerCase().includes(searchValue.toLocaleLowerCase())
    );
    const searchProducts = products.filter((item) => item.title.toLowerCase().includes(searchValue.toLocaleLowerCase())
    );
    // const searchCategory = category
    // .filter((item) => item.title.toLowerCase().includes(searchValue.toLocaleLowerCase()));

    const handleInputChange = (e)=>{
        setSearchValue(e.target.value);
    }
    const handleSearch = (e)=>{
        e.preventDefault();
        // setSearchValue(e.target.value);
        console.log("Valor de busqueda", searchValue)
    }
    return(
        <div className="relative w-full md:w-2/4 group">
        <button className="absolute inset-y-0 start-0 flex items-center ps-2 pe-4 cursor-pointer" onClick={(e) => handleSearch(e)} >
        <SearchIcon className="" />
        <span className="sr-only ">Search icon</span>
        </button>
        <input
        type="text"
        value={searchValue}
        onChange={handleInputChange}
        className="block w-full p-2 ps-10 text-sm text-gray-900 bg-input border-input border rounded-md placeholder-black 
        border-1 border-[#212229] 
        placeholder:font-sm focus:bg-input focus:border-input2"
        placeholder="¿Que estas buscando...?"
        />        

         <div className={`absolute left-0 ${searchValue.length > 0 ? "grid" : "hidden" } z-40 font-normal bg-white  rounded-md shadow grid-cols-3 px-4 py-4 w-full gap-4 max-h-80 overflow-y-auto`}>
        <div className="flex flex-col justify-start items-start col-span-1 ">
            <h4 className="font-semibold pb-1 border-b-[0.1rem] ">Sugerencias</h4>
          <ul className="py-1 text-sm md:text-base text-[#212229] font-medium">
            {
                searchCategory.map((item, index) => (
                    <li key={index}>
                       <a href="#" className="block py-2 hover:bg-gray-100">{item}</a>
                    </li> 
                ))
            }
            {/* <li>hola</li> */}

        </ul>
        </div>
        <div className="flex flex-col justify-start items-start col-span-2">
        <h4 className="font-semibold pb-1 border-b-[0.1rem]">Productos</h4>
        {/* <ul className="py-2 text-base text-[#212229] font-normal" aria-labelledby="dropdownLargeButton">
             <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Hola</a>
             </li>

        </ul> */}
        {
        searchProducts.map((product, index) =>(
            <div key={index} className="scroll-y-auto">
                <ItemsNavBar product={product} />
             </div>   
            ))
        }
        {/* <ItemsNavBar></ItemsNavBar>
        <ItemsNavBar></ItemsNavBar>
        <ItemsNavBar></ItemsNavBar> */}
        

        </div>
        </div>
    </div>
    )
}
export default SearchBar;