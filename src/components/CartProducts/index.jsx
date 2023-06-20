import {React, useContext} from 'react';
import { CartContext } from '../../context';
import OrderCart from '../OrderCart';
import { totalPrice } from '../../utils';
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
        <button className=" bg-green-600 w-80 h-14 rounded-xl text-xl text-white cursor-pointer">
          CheckOut
        </button>
      </div>
    </aside>
  );
};

export default CartProducts;