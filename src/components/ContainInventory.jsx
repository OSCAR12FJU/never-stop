// DESTRUCTURAR COLOCAR LA PETCIÓN EN EL ARCH API
import { useEffect, useState } from "react";
import { CardProductInventory } from "./CardProductInventory";

export const ContainInventory = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  // Función para obtener los productos
  
  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/product/getAll");
      if (!response.ok) {
        throw new Error("Error en la petición");
      }
      const data = await response.json();
      setProducts(data.products); // Guardamos los productos en el estado
    } catch (error) {
      console.error("Error en la petición:", error);
      setError(error.message);
    }
  };

  // Llamamos a getProducts cuando se monta el componente
  useEffect(() => {
    getProducts();
  }, []);

  // Si hay un error, mostramos un mensaje
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="mt-4 shadow">
      {products.map((product, index) => (
        <CardProductInventory
          key={index}
          image={product.image}
          title={product.title}
          price={parseFloat(product.price)} // Convertimos price a número
        />
      ))}
    </div>
    
  );
};
