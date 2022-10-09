import { getStoredCart } from "../../utilities/fakedb";


export const productsAndCartLoader = async () => {
    // get Products
    //normal fetch data due to blow manually perform task
    const productsData = await fetch('products.json');
    const products = await productsData.json();

    // get cart
    // import utilities function getStoredCart() for collect local storage saved data
    const savedCart = getStoredCart();
    // new modify cart with quantity information
    const initialCart = [];
    
    for (const id in savedCart) {
        // whole product id match with local storage saved id
        const addedProduct = products.find(product => product.id === id);
        // local storage saved id product quantity use
        if (addedProduct) {
            const quantity = savedCart[id];
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct);
        }
    }

    return { products: products, initialCart: initialCart };
    /*  
    or
    return { products, initialCart }; 
    */
}