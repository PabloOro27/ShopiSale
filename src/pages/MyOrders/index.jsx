import {React, useContext} from 'react';
import { CartContext } from '../../context'; // contexto
import { Link } from 'react-router-dom';
import OrdersCart from '../../components/OrdersCart';

const MyOrders = () => {
    const context = useContext(CartContext);

    return (
      <div>
        <h1 className='text-center mb-6 font-extrabold text-2xl'>My Orders</h1>
        {context.orders.map((order, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCart
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}
              date={order.date}
            />
          </Link>
        ))}
      </div>
    );
};

export default MyOrders;