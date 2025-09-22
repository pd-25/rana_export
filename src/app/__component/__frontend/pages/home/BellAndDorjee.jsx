import React from 'react'
import styles from '@/app/__assets/style/component/gong.module.css'
import Image from 'next/image'
import hero1 from '@/app/__assets/images/hero1.png'
import Products from './Products'

const BellAndDorjee = () => {
  const products = [
    {
      id: 5,
      productTitle: 'Round sevel chakra bowl',
      category: 'Round sevel chakra bowl',
      image: hero1,
      desc: 'Hand made singing bowls',
    },
    {
      id: 6,
      productTitle: 'Round sevel chakra bowl',
      category: 'Round sevel chakra bowl',
      image: hero1,
      desc: 'Hand made singing bowls',
    },
    {
      id: 7,
      productTitle: 'Round sevel chakra bowl',
      category: 'Round sevel chakra bowl',
      image: hero1,
      desc: 'Hand made singing bowls',
    },
    {
      id: 8,
      productTitle: 'Round sevel chakra bowl',
      category: 'Round sevel chakra bowl',
      image: hero1,
      desc: 'Hand made singing bowls',
    },
  ];
  return (
    <>
      <Products
        data={products}
        heading="BELL & DORJEE"
        subheading="SOUND THAT GROUNDS, VIBRATION THAT HEALS"
        description="More than just a musical note — each singing bowl creates powerful frequencies that help release stress, deepen focus, and invite inner peace into your daily life."
        bgColor="#feebd6"
      />
    </>


  )
}

export default BellAndDorjee
