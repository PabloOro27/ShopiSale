import {React, useContext} from 'react';
import { CartContext } from '../../context'; // contexto
import { Link } from 'react-router-dom';
import OrdersCart from '../../components/OrdersCart';

const MyOrders = () => {
    const context = useContext(CartContext);

    return (
      <div>
        <h1>My Orders</h1>
        {context.orders.map((order, index) => (
          <Link key={index} to={`/my-orders/${order.id}`}>
            <OrdersCart
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}
              date={order.dateShop}
            />
          </Link>
        ))}
      </div>
    );
};

export default MyOrders;