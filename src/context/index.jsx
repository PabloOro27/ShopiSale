import { createContext, useState, useEffect } from "react";

export const CartContext = createContext(); // se crea el contexto

// proveedor de contexto
export const CartContextProvider = ({children}) => {
  //contador de carrito de compras
  const [count, setCount] = useState(0);
  // funciones de abrir y cerrar el modal
  const [productDetailOpen, setProductDetailOpen] = useState(false);
  const openProductDetail = () => {
    setProductDetailOpen(true);
    setCartOpen(false);
  };
  const closeProductDetail = () => setProductDetailOpen(false);
  // mnostrar datos del Product Detail
  const [productDetailShow, setProductDetailShow] = useState({
    images: [],
  });
  // informacion del carrito de compras
  const [cartProducts, setCartProducts] = useState([]); //array de objetos [{}, {}]
  // abrir y cerrar carrito de compras
  const [cartOpen, setCartOpen] = useState(false);
  const openCart = () => {
    setCartOpen(true);
    setProductDetailOpen(false);
  };
  const closeCart = () => setCartOpen(false);
  // shoping cart order
  const [orders, setOrders] = useState([]); //array de objetos [{}, {}]

  // get products from API
  const [items, setItems] = useState(null);
  const [filteredItems, setFilteredItems] = useState("");
  // filtro por categoria
  const [searchByCategory, setSearchByCategory] = useState("");
  // console.log("searchByCategory:", searchByCategory);
  // busqueda de productos
  const [searchByTitle, setSearchByTitle] = useState("");

  // recorrido de la API para obtener los productos y agregalor a la variable items
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  // filtrado de productos por titulo
  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    ); // se retorna el array de objetos filtrado
  };
  // filtrado de productos por categoria
  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter((item) =>
      item.category.name.toLowerCase().includes(searchByCategory.toLowerCase())
    ); // se retorna el array de objetos filtrado
  };
  
  // tipo de filtrado
  const filterBy = (searchType, items, searchByCategory, searchByTitle) => {
    if (searchType === "by_title") {
      return filteredItemsByTitle(items, searchByTitle); // se ejecuta la funcion de filtrado
    }
    if (searchType === "by_category") {
      return filteredItemsByCategory(items, searchByCategory); // se ejecuta la funcion de filtrado
    }
    if (searchType === "by_title_and_category") {
      return filteredItemsByCategory(filteredItemsByTitle(items, searchByTitle),searchByCategory); // se ejecuta la funcion de filtrado
    }
    if (!searchType) {
      return items; // se ejecuta la funcion de filtrado
    }
  }; 

  useEffect(() => {
    // se ejecuta cada vez que cambia el valor de items o searchByTitle
    if (searchByTitle && searchByCategory) {
      setFilteredItems(
        filterBy("by_title_and_category", items, searchByCategory, searchByTitle)
      ); // se ejecuta la funcion de filtrado
    }
    if (searchByTitle && !searchByCategory) {
      setFilteredItems(filterBy("by_title", items, searchByCategory, searchByTitle)) // se ejecuta la funcion de filtrado
    }
    if (searchByCategory && !searchByTitle) {
      setFilteredItems(filterBy("by_category", items, searchByCategory, searchByTitle)) // se ejecuta la funcion de filtrado
    }
    if (!searchByTitle && !searchByCategory) {
      setFilteredItems(filterBy(null, items, searchByCategory, searchByTitle));
    }
  }, [items, searchByTitle, searchByCategory]); // se ejecuta cada vez que cambia el valor de items o searchByTitle

  // ---------------------------------------------------------
  // retorno de los valores del contexto
  return (
    <CartContext.Provider
      value={{
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
        orders,
        setOrders,
        items,
        setItems,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
        setFilteredItems,
        searchByCategory,
        setSearchByCategory,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}