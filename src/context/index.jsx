import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({children}) => {
    //contador de carrito de compras 
    const [count, setCount] = useState(0);
    // funciones de abrir y cerrar el modal
    const [productDetailOpen, setProductDetailOpen] = useState(false);
    const openProductDetail = () => setProductDetailOpen(true); 
    const closeProductDetail = () => setProductDetailOpen(false);
    // mnostrar datos del Product Detail
    const [productDetailShow, setProductDetailShow] = useState({
        images: [],
    });
    // informacion del carrito de compras 
    const [cartProducts, setCartProducts] = useState([]); //array de objetos [{}, {}]
    // abrir y cerrar carrito de compras 
    const [cartOpen, setCartOpen] = useState(false);
    const openCart = () => setCartOpen(true);
    const closeCart = () => setCartOpen(false);
    
    return (
        <CartContext.Provider value={{
            count,
            setCount,
            productDetailOpen,
            openProductDetail,
            closeProductDetail,
            productDetailShow,
            setProductDetailShow, 
            cartProducts,
            setCartProducts,
            cartOpen,
            openCart,
            closeCart,
        }}>
            {children}
        </CartContext.Provider>
    )
}