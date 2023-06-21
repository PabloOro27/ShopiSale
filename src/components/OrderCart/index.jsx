import React from 'react';
import { IoTrashBinSharp } from "react-icons/io5";

const OrderCart = (props) => {
    const {
        id, title, image, price, handleDelete
    } = props;
    // renderizar boron de eliminar o no
    let renderIconDelete;
    if (handleDelete){
      renderIconDelete =
        <IoTrashBinSharp 
              className="cursor-pointer text-xl hover:text-red-700" 
              onClick={() => handleDelete(props.id)}
              />
      
    }

    return (
      <div className="flex justify-between items-center m-2">
        <div className='flex items-center gap-2'>
          <figure className='w-20 h-20'>
            <img src={image} alt="imagen" className='w-full h-full rounded-lg object-cover'/>
          </figure>
          <p className='text-md font-light'>{title}</p>
        </div>
        <div className='flex gap-2 items-center'>
          <p className='text-lg font-semibold'>Q{price}</p>
          {renderIconDelete}
        </div>
      </div>
    );
};

export default OrderCart;