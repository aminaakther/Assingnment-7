import React from 'react';
import Navbar from "../components/shared/Navbar";
import Footer from '../components/shared/Footer';
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <Navbar></Navbar>   {/* ✅ ঠিক */}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};
export default RootLayout;