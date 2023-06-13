import React from 'react'
import { useRoutes, BrowserRouter} from 'react-router-dom'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SingIn from '../SingIn'
import Navbar from '../../components/Navbar'
import Layout from '../../components/Layout'
import '../../../src/App.css' //estilos globales

// funcion de las rutas
const AppRoutes = () => {
    let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/sing-in', element: <SingIn /> },
    { path: '*', element: <NotFound /> },
  ])
  return routes
}
// funcion principal
const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Navbar />
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  );
};

export default App
