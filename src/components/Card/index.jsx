import {React,  useContext} from 'react';
import { CartContext } from '../../context';
import { BsFillCartPlusFill } from 'react-icons/bs';
import {BsCartCheckFill} from 'react-icons/bs';
import { render } from 'react-dom';

const Card = (props) => {
  const context = useContext(CartContext);
  // enviar los datos del producto y abrir el aside de product detail
  const showProduct = (dataInfo) => {
    context.setProductDetailShow(dataInfo);
    context.openProductDetail();
  };
  //añadir al carrito de compras 
  const addToCart = (productData) => {
    context.setCount(context.count + 1)
    context.setCartProducts([...context.cartProducts, productData])
    context.openCart(); 
  }; 
  // renderizado del icono de agregar al carrito de compras
  const renderIcon = (id) => {
    const isInCart = context.cartProducts.filter((product) => product.id === id).length > 0; //busca si el producto ya esta en el carrito
    
    if (isInCart) {
      return (
        <BsCartCheckFill className="absolute top-0 right-0 bg-white text-lime-400 w-8 h-8 rounded-full p-1 m-2" />
      );
    }
    else{
      return (
        <BsFillCartPlusFill
          className="absolute top-0 right-0 bg-white w-8 h-8 rounded-full p-1 m-2"
          onClick={() => addToCart(props.data)}
        />
      );
    }
  };

    return (
      <div className="bg-white cursor-pointer w-60 h-68 rounded-lg box-content">
        <figure className="relative mb-2 w-full h-4/5">
          <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg  text-black text-xs m-2 p-1">
            {props.data.category.name}
          </span>
          <img
            className="w-full h-full object-cover rounded-lg"
            src={props.data.images[0]}
            alt={props.data.title}
            onClick={() => showProduct(props.data)}
          />
          {/* logo de carrito de compras */}
          {renderIcon(props.data.id)} {/* enviamos el id del producto para saber si esta en el carrito */}
        </figure>
        <p
          className="flex justify-between items-center p-1 cursor-pointer"
          onClick={() => showProduct(props.data)}
        >
          <span className="text-md font-light">{props.data.title}</span>
          <span className="text-lg font-medium">Q{props.data.price}</span>
        </p>
      </div>
    );
};

export default Card;