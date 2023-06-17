import {React, useContext} from 'react';
import { CartContext } from '../../context';
import './styles.css';
import { CgCloseO } from "react-icons/cg"; //iconos

const CartProducts = () => {
    const context = useContext(CartContext);

    return (
      <aside className={`${context.cartOpen ? "flex" : "hidden"}
        cart-products flex-col fixed right-0 border border-black rounded-lg bg-white`
        }>
        {/* titulo y parte superior de la cart */}
        <div className="flex justify-between items-center p-6 pb-0">
          <h2 className="font-medium text-xl">My Order</h2>
          <CgCloseO
            className="font-medium text-3xl cursor-pointer"
            onClick={() => context.closeCart()}
          />
        </div>
      </aside>
    );
};

export default CartProducts;