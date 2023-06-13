import React from 'react';
import { BsFillCartPlusFill } from 'react-icons/bs';
const Card = () => {
    return (
      <div className="bg-white cursor-pointer w-60 h-64 rounded-lg box-content border-2 border-solid border-emerald-300 p-0.5">
        <figure className="relative mb-2 w-full h-4/5">
          <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg  text-black text-xs m-2 p-1">
            Electronics
          </span>
          <img
            className="w-full h-full object-cover rounded-lg"
            src="https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="headphones"
          />
          {/* <div className='absolute top-0 right-0'></div> */}
          <BsFillCartPlusFill className="absolute top-0 right-0 bg-white w-8 h-8 rounded-full p-1 m-2" />
        </figure>
        <p className="flex justify-between items-center p-1">
          <span className="text-md font-light">Headphones</span>
          <span className="text-lg font-medium">Q300.00</span>
        </p>
      </div>
    );
};

export default Card;