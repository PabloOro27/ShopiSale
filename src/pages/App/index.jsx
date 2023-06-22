import React from 'react'
import { useRoutes, BrowserRouter} from 'react-router-dom'
import { CartContextProvider } from '../../context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SingIn from '../SingIn'
import Navbar from '../../components/Navbar'
import Layout from '../../components/Layout'
import CartProducts from '../../components/CartProducts'
import '../../../src/App.css' //estilos globales

// funcion de las rutas
const AppRoutes = () => {
    let routes = useRoutes([
      { path: "/", element: <Home /> },
      { path: "/my-account", element: <MyAccount /> },
      { path: "/my-orders", element: <MyOrders /> },
      { path: "/my-orders/last", element: <MyOrder /> },
      { path: "/my-orders/:id", element: <MyOrder /> }, //id es un parametro y los dos puntos significa que espera un valor
      { path: "/sing-in", element: <SingIn /> },
      { path: "*", element: <NotFound /> },
    ]);
  return routes //retorna las rutas
}
// funcion principal
const App = () => {
  return (
    <CartContextProvider> {/*context general de la app */}
      <BrowserRouter> {/*para las rutas, objeto de ereact para dirigir a otra pagina */}
        <Layout> {/*layout general de la app */}
          <Navbar /> {/*navbar general de la app */}
          <AppRoutes /> {/*rutas de la app */}
          <CartProducts /> {/*carrito de la app */}
        </Layout>
      </BrowserRouter>
    </CartContextProvider>
  );
};

export default App
