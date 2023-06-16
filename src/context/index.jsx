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
    const [productDetailShow, setProductDetailShow] = useState({});

    return (
        <CartContext.Provider value={{
            count,
            setCount,
            productDetailOpen,
            openProductDetail,
            closeProductDetail,
            productDetailShow,
            setProductDetailShow
        }}>
            {children}
        </CartContext.Provider>
    )
}