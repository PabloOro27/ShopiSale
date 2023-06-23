import {React, useContext} from 'react';
import { CartContext } from '../../context';
import Card from '../../components/Card';
import ProductDetail from '../../components/ProductDetail';

const Home = () => {
    const {items} = useContext(CartContext);

    return (
      <>
        <div className="flex flex-col items-center justify-center mb-6 w-80">
          <h1 className="font-extrabold text-2xl">Exclusive Products</h1>
          <input type="text" placeholder="Busca tu producto" className='w-full'/>
        </div>
        <div className="grid gap-5 grid-cols-4 w-full max-w-screen-xl">
          {
            // el icono de ? es para que no se rompa la app si no hay items
            items?.map((item) => (
              <Card key={item.id} data={item} /> // data es la prop que se le pasa al componente Card
            ))
          }
          <ProductDetail />
        </div>
      </>
    );
};

export default Home;