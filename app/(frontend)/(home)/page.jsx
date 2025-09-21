import React from 'react'
import styles from '@/app/__assets/style/page/home.module.css'
import Banner from "@/app/__component/__frontend/pages/home/Banner.jsx";
import SingingBowls from "@/app/__component/__frontend/pages/home/SingingBowls.jsx";
import Products from "@/app/__component/__frontend/pages/home/Products.jsx";
import Gong from "@/app/__component/__frontend/pages/home/Gong.jsx";
import Tingsha from "@/app/__component/__frontend/pages/home/Tingsha.jsx";
import BellAndDorjee from "@/app/__component/__frontend/pages/home/BellAndDorjee.jsx";
import Stick from "@/app/__component/__frontend/pages/home/Stick.jsx";
import Cushion from "@/app/__component/__frontend/pages/home/Cushion.jsx";
import OtherProducts from "@/app/__component/__frontend/pages/home/OtherProducts.jsx";
import Goals from "@/app/__component/__frontend/pages/home/Goals.jsx";
import WW from "@/app/__component/__frontend/pages/home/Wide.jsx";
import Testimonial from "@/app/__component/__frontend/pages/home/Testimonial.jsx";
import ProductsVideo from "@/app/__component/__frontend/pages/home/ProductsVideo.jsx";
import Feature from "@/app/__component/__frontend/pages/home/Feature.jsx";

const page = () => {
  return (
    <>
      <Banner />
      <SingingBowls />
      <Gong />
      <Tingsha />
      <BellAndDorjee />
      <Stick />
      <Cushion />
      <OtherProducts />
      <Goals />
      <WW />
      <Testimonial />
      <ProductsVideo />
      <Feature />
    </>
  )
}

export default page