import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({children}) => {
    const [count, setCount] = useState(0); 
    console.log(count)
    return (
        <CartContext.Provider value={{
            count,
            setCount,
        }}>
            {children}
        </CartContext.Provider>
    )
}