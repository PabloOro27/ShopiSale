import {React, useContext} from 'react';
import { CartContext } from '../../context'; // contexto
import { Link } from 'react-router-dom';
import OrderCart from '../../components/OrderCart'; // componente de cada producto en el carrito

const MyOrder = () => {
  const context = useContext(CartContext);
  console.log(context.orders);
    return (
      <div>
        My Order
        <div className="products-cart overflow-auto h-4/5">
          {context.orders?.slice(-1)[0].products.map(
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
          TOTAL = Q{context.orders?.slice(-1)[0].totalPrice}
        </p>
        <Link to="/my-orders">
          <button
            className=" bg-green-600 w-80 h-14 rounded-xl text-xl text-white cursor-pointer"
          >
            Pagar
          </button>
        </Link>
      </div>
    );
};

export default MyOrder;