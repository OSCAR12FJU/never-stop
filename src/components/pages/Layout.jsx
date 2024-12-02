// import { useLocation } from "react-router-dom";
// import { CarrouselProduct } from "../CarrouselProduct";
import { useState } from "react";
import { Banner } from "../sections/Banner";
import Header from "../sections/Header"
// import { Products } from "../sections/Products";
import { SideBar } from "../Sidebar";
import {  Outlet, useLocation } from "react-router-dom";
import { SideBarCart } from "../SidebarCart";
import { Footer } from "../sections/Footer";


export const Layout = () =>{ 
const location = useLocation();
const [openSideBar1, setOpenSideBar1] = useState(false);
const [openSideBar, setOpenSideBar] = useState(false);


const notHome = location.pathname.startsWith('/products');
return(
        <>
        <Header notHome= {notHome} setOpenSideBar={setOpenSideBar} setOpenSideBar1={setOpenSideBar1}/>
        <SideBar setOpenSideBar={setOpenSideBar} openSideBar={openSideBar} />
        <SideBarCart openSideBar1={openSideBar1} setOpenSideBar1={setOpenSideBar1}/>
        {!notHome && <Banner /> }
        <main className="">
        <Outlet />
        
        </main>
        <Footer />
        </>
    )
}