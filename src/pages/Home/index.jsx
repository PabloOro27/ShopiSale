import {React, useState, useEffect} from 'react';
import Card from '../../components/Card';

const Home = () => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
    .then(response => response.json())
    .then (data => setItems(data))
  }, []);

    return (
      <div className='grid gap-5 grid-cols-4 w-full max-w-screen-xl'>
        {
          items && items.map((item) => {
           return <Card key ={item.id} data = {item}/> // data es la prop que se le pasa al componente Card
          })
        }
      </div>
    );
};

export default Home;