export const getProductsCategory = async() =>{
    try{
        const response = await fetch(`https://fakestoreapi.com/products/categories`)
        if (!response.ok) {
            throw new Error('Error en la consulta');
        }
        const data = await response.json();
        return data;
    } catch(error){
        console.error('error en la petición:', error);
        throw error;
    }
}

export const getProductCateIndiv = async(category) =>{
    try{
        const response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
        if (!response.ok) {
            throw new Error('Error en la consulta');
        }
        const data = await response.json();
        return data;
    } catch(error){
        console.error('error en la petición:', error);
        throw error;
    }
}
export const getProductInd = async(id) =>{
    try{
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)
        if (!response.ok) {
            throw new Error('Error en la consulta');
        }
        const data = await response.json();
        return data;
    } catch(error){
        console.error('error en la petición:', error);
        throw error;
    }
}

export const imgMiniature =[
    {
        imgUrl:"https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8aGVhZHBob25lfGVufDB8MHx8fDE3MjEzMDM2OTB8MA&ixlib=rb-4.0.3&q=80&w=1080",
        alt:"Thumbnail 1"
    },
    {
        imgUrl:"https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080",
        alt:"Thumbnail 2"
    },
    {
        imgUrl:"https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080",
        alt:"Thumbnail 3"
    },
    {
        imgUrl:"https://images.unsplash.com/photo-1528148343865-51218c4a13e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080",
        alt:"Thumbnail 4"
    },
]



export const getProducts = async() =>{
    try{
        const response = await fetch('https://fakestoreapi.com/products')
        if (!response.ok) {
            throw new Error('Error al crear el libro');
        }
        const data = await response.json();
        return data;
    } catch(error){
        console.error('error en la petición:', error);
        throw error;
    }

}