export const getAllProduts = fetch('https://fakestoreapi.com/products').then(res=>res.json());

export const getSpecificCategory = (category) => {
    return fetch(`https://fakestoreapi.com/products/category/${category}`).then(res=>res.json());
} 
