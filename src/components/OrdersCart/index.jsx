import React from "react";

const OrdersCart = (props) => {
  const { totalPrice, totalProducts, dateShop} = props;
  // renderizar boron de eliminar o no

  return (
    <div className="flex justify-between items-center m-2 border border-black">
      <p>
        <span>{dateShop}</span>
        <span>{totalProducts}</span>
        <span>{totalPrice}</span>
      </p>
    </div>
  );
};

export default OrdersCart;
