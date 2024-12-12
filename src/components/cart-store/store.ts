
type Product={
  
        name?: string,
        description?:string,
        price?: string,
        id?: string,
        imgSrc?: string
    }



export const setStore = (product: Product, quantity: number) =>{
    const storageJson = localStorage.getItem("cart")?? "{}";
    const storage = JSON.parse(storageJson);
    
    storage[product.id] =  {quantity, product};

    localStorage.setItem("cart", JSON.stringify(storage)); 
}