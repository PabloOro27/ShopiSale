import {React, useContext} from 'react';
import { CartContext } from '../../context'; // contexto
import { Link } from 'react-router-dom';
import OrderCart from '../../components/OrderCart'; // componente de cada producto en el carrito

const MyOrder = () => {
  const context = useContext(CartContext);
  const currentPath = window.location.pathname; // obtener la ruta actual
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1); // obtener el ultimo elemento de la ruta
  let messageButton
  // comparacion de index
  if (index === "last") {
    index = context.orders?.length - 1;
    messageButton = 
      <button className= "bg-green-600 w-80 h-14 rounded-xl text-xl text-white cursor-pointer">
        Confirmar
      </button>
  } else {
    messageButton = (
      <button className= "bg-slate-800 w-80 h-14 rounded-xl text-xl text-white cursor-pointer">
        Regresar
      </button>
    );
  }

    return (
      <div>
        My Order
        <div className="products-cart overflow-auto h-4/5">
          {context.orders?.[index]?.products.map(
            (
              product // slice(-1)[0] es para obtener el ultimo elemento del array
            ) => (
              <OrderCart
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.images}
              />
            )
          )}
        </div>
        <p className="text-center text-xl font-medium text-green-500 p-1">
          TOTAL = Q{context.orders?.[index]?.totalPrice}
        </p>
        <Link to="/my-orders">
          {messageButton}
        </Link>
      </div>
    );
};

export default MyOrder;