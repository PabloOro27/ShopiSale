import {React, useContext} from 'react';
import { CartContext } from '../../context';
import Card from '../../components/Card';
import ProductDetail from '../../components/ProductDetail';

const Home = () => {
    const context = useContext(CartContext);

    const renderView = () => {
      if(context.filteredItems?.length > 0) { // si hay items en el array
        return (
          context.filteredItems?.map((item) => (
            <Card key={item.id} data={item} /> // data es la prop que se le pasa al componente Card
          ))
        )
      }
      else {
        return (
          <p>no hay productos con ese nombre</p>
        )
      }
    }

    return (
      <>
        <div className="flex flex-col items-center justify-center mb-8 w-80">
          <h1 className="font-extrabold text-2xl mb-1 text-lime-500">
            Exclusive Products
          </h1>
          <input
            type="text"
            placeholder="Busca tu producto"
            className="w-80 rounded-lg border-2 border-green-400 px-4 py-2 focus:outline-none text-md font-medium"
            onChange={(event) => context.setSearchByTitle(event.target.value)}
          />
        </div>
        <div className="grid gap-5 grid-cols-4 w-full max-w-screen-xl">
          {renderView()}
          <ProductDetail />
        </div>
      </>
    );
};

export default Home;