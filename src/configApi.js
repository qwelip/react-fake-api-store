export const getAllProduts = fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .catch(err => console.log(err))

export const getSpecificCategory = (category) => {
    return fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then(res=>res.json())
    .catch(err => console.log(err))
} 
