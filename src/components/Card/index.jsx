import React from 'react';
import { BsFillCartPlusFill } from 'react-icons/bs';
const Card = (props) => {
    return (
      <div className="bg-white cursor-pointer w-60 h-68 rounded-lg box-content">
        <figure className="relative mb-2 w-full h-4/5">
          <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg  text-black text-xs m-2 p-1">
            {props.data.category.name}
          </span>
          <img
            className="w-full h-full object-cover rounded-lg"
            src= {props.data.images[0]}
            alt= {props.data.title}
          />
          {/* <div className='absolute top-0 right-0'></div> */}
          <BsFillCartPlusFill className="absolute top-0 right-0 bg-white w-8 h-8 rounded-full p-1 m-2" />
        </figure>
        <p className="flex justify-between items-center p-1">
          <span className="text-md font-light">{props.data.title}</span>
          <span className="text-lg font-medium">Q{props.data.price}</span>
        </p>
      </div>
    );
};

export default Card;