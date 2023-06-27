import {React, useContext} from 'react';
import { CartContext } from '../../context'; // contexto
import { Link } from 'react-router-dom';
import OrderCart from '../OrderCart'; // componente de cada producto en el carrito
import { totalPrice } from '../../utils'; // funcion para calcular el total del carrito
// iconos y estilos
import './styles.css'; 
import { CgCloseO } from "react-icons/cg"; //iconos

const CartProducts = () => {
  const context = useContext(CartContext);
  // eliminar del carrito
  const haddleDelete = (id) => {
    // filtra los productos que no tengan el id que se esta eliminando
    const filterProducts = context.cartProducts.filter((product) => product.id != id); 
    context.setCartProducts(filterProducts);
    context.setCount(context.count - 1);
  };
  // checkout del carrito 
  const handleCheckOut = () => {
    // si no hay productos en el carrito
    if (context.count === 0){
      alert("No products in the cart");
      window.location.href = "/"; // si no hay productos redirige a la pagina principal
    }   
    // si si hay productos en el carrito
    else{
      // crea un objeto con la informacion de la orden
      const orderToAdd = {
        date: '017.05.2023',
        products: context.cartProducts,
        totalPrice: totalPrice(context.cartProducts),
        totalProducts: context.cartProducts.length,
      }

      context.setOrders([...context.orders, orderToAdd]); //agrega la orden al array de ordenes
      context.setCartProducts([]); // vacia el carrito
      context.setCount(0); // reinicia el contador
      context.closeCart(); // cierra el carrito
      context.setSearchByTitle("");
    }
  };

  return (
    <aside
      className={`${context.cartOpen ? "flex" : "hidden"}
        cart-products flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      {/* titulo y parte superior de la cart */}
      <div className="flex justify-between items-center p-6 pb-0 mb-2">
        <h2 className="font-medium text-xl">My Order</h2>
        <CgCloseO
          className="font-medium text-3xl cursor-pointer"
          onClick={() => context.closeCart()}
        />
      </div>
      <div className="products-cart overflow-auto">
        {context.cartProducts.map((product) => (
          <OrderCart
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.images[0]}
            handleDelete={haddleDelete}
          />
        ))}
      </div>
      {/* checkout */}
      <p className="text-center text-xl font-medium text-green-500 p-1">
        TOTAL = Q{totalPrice(context.cartProducts)}
      </p>
      <div className="flex items-end justify-center h-24 w-full pb-3">
        <Link to = '/my-orders/last'>
          <button 
            className=" bg-green-600 w-80 h-14 rounded-xl text-xl text-white cursor-pointer"
            onClick={()  => handleCheckOut()}
          >
            CheckOut
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default CartProducts;