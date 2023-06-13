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
      <div className='home flex w-full h-full mx-5'>
        {
          items && items.map(() => {
           return <Card />
          })
        }
      </div>
    );
};

export default Home;