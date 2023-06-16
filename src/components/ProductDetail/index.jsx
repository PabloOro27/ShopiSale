import { React, useContext } from "react";
import { CartContext } from "../../context";
import { CgCloseO } from "react-icons/cg"; //iconos
import "./styles.css"; //estilos


const ProductDetail = () => {
  const context = useContext(CartContext);
  let productInfo = {}
  productInfo = context.productDetailShow; //objeto con los datos de los productos

  const addProduct = () => {
    context.setCount(context.count + 1);
    context.closeProductDetail();
  };

  return (
    <aside
      className={`${context.productDetailOpen ? "flex" : "hidden"} 
        product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6 pb-0">
        <h2 className="font-medium text-xl">Detalles</h2>
        <CgCloseO
          className="font-medium text-3xl cursor-pointer"
          onClick={() => context.closeProductDetail()}
        />
      </div>
      <figure className="flex justify-center items-center p-2">
        <img
          className="w-full h-full rounded-lg"
          src={productInfo.images[0]}
          alt={productInfo.title}
        />
      </figure>
      <p className="flex justify-between items-center p-3">
        <span className="font-normal text-lg">{productInfo.title}</span>
        <span className="font-bold text-lg text-lime-500">
          Q{productInfo.price}.00
        </span>
      </p>
      <p className="p-3">
        <span className="font-light text-lg text-justify">
          {productInfo.description}
        </span>
      </p>
      <div className="flex items-end justify-center h-full w-full pb-3">
        <button 
          className=" bg-green-600 w-80 h-14 rounded-xl text-xl text-white cursor-pointer"
          onClick={() => addProduct()}
        >
          AGREGAR
        </button>
      </div>
    </aside>
  );
};

export default ProductDetail;
