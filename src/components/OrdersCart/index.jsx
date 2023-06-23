import React from "react";

const OrdersCart = (props) => {
  const { totalPrice, totalProducts, date} = props;
  // renderizar boron de eliminar o no

  return (
    <div className="flex justify-between items-center m-3 border border-black w-80 p-4 rounded-md overflow-auto">
      <p className="flex justify-between items-center w-full">
        <div className="flex flex-col font-light">
          <span>{date}</span>
          <span>Articulos: {totalProducts}</span>
        </div>
        <span className="font-bold text-2xl">Q{totalPrice}</span>
      </p>
    </div>
  );
};

export default OrdersCart;
