import React from 'react'
import styles from '@/app/__assets/style/component/gong.module.css'
import Image from 'next/image'
import hero1 from '@/app/__assets/images/hero1.png'
import Products from './Products'

const Cushion = () => {
    const products = [
        {
            id: 14,
            productTitle: 'Round sevel chakra bowl',
            category: 'Round sevel chakra bowl',
            image: hero1,
            desc: 'Hand made singing bowls',
        },
        {
            id: 15,
            productTitle: 'Round sevel chakra bowl',
            category: 'Round sevel chakra bowl',
            image: hero1,
            desc: 'Hand made singing bowls',
        },
        {
            id: 16,
            productTitle: 'Round sevel chakra bowl',
            category: 'Round sevel chakra bowl',
            image: hero1,
            desc: 'Hand made singing bowls',
        },
        {
            id: 17,
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
                heading="COUSION"
                subheading="SOUND THAT GROUNDS, VIBRATION THAT HEALS"
                description="More than just a musical note — each singing bowl creates powerful frequencies that help release stress, deepen focus, and invite inner peace into your daily life."
                bgColor="rgb(254 235 214)"
            />
        </>


    )
}

export default Cushion
