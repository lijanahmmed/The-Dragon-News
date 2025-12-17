import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/homelayout/LeftAside";
import RighAside from "../components/homelayout/RighAside";
import Footer from "../components/homelayout/Footer";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto my-3">
          <LatestNews></LatestNews>
        </section>
        <nav className="w-11/12 mx-auto my-3">
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="w-11/12 mx-auto my-3  grid grid-rows-1 grid-cols-12 gap-5">
        <aside className="col-span-12 lg:col-span-3 lg:sticky top-0 h-fit">
          <LeftAside></LeftAside>
        </aside>
        <section className="main col-span-12 lg:col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-12 lg:col-span-3 lg:sticky top-0 h-fit">
          <RighAside></RighAside>
        </aside>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
