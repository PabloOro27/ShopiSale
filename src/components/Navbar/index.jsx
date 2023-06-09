import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeStyle = "underline underline-offset-4 text-green-600";

  return (
   <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-lg font-light">
      {/* lado ixquierdo */}
      <ul className="flex items-center gap-4">
         {/* logo principal  */}
         <li className="font-semibold text-xl text-green-600">
            <NavLink to="/">Shopi</NavLink>
         </li>
         {/* all */}
         <li>
            <NavLink
               to="/"
               className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
               All
            </NavLink>
         </li>
         {/* clothes */}
         <li>
            <NavLink
               to="/clothes"
               className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
               Clothes
            </NavLink>
         </li>
         {/* electronics */}
         <li>
            <NavLink
               to="/electronics"
               className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
               Electronics
            </NavLink>
         </li>
         {/* furnitures */}
         <li>
            <NavLink
               to="/furnitures"
               className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
               Furnitures
            </NavLink>
         </li>
         {/* others */}
         <li>
            <NavLink
               to="/others"
               className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
               Others
            </NavLink>
         </li>
      </ul>
      {/* lado derecho */}
      <ul className="flex items-center gap-3">
         {/* correo */}
         <li className="text-black/60">PabloOro27@prueba.com</li>
         {/* my orders  */}
         <li>
            <NavLink
               to="/my-orders"
               className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
               My Orders
            </NavLink>
         </li>
         {/* my account */}
         <li>
            <NavLink
               to="/my-account"
               className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
               My Account
            </NavLink>
         </li>
         {/* sing in  */}
         <li>
            <NavLink
               to="/sing-in"
               className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
               Sing in
            </NavLink>
         </li>
         {/* carrito */}
         <li>🛒0</li>
      </ul>
   </nav>
  );
};

export default Navbar;
