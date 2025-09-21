import React from 'react'
import styles from '@/app/__assets/style/component/tingsha.module.css'
import Image from 'next/image'
import hero1 from '@/app/__assets/images/hero1.png'
import Products from './Products'

const Tingsha = () => {
    const products = [
        {
            id: 1,
            productTitle: 'Round sevel chakra bowl',
            category: 'Round sevel chakra bowl',
            image: hero1,
            desc: 'Hand made singing bowls',
        },
        {
            id: 1,
            productTitle: 'Round sevel chakra bowl',
            category: 'Round sevel chakra bowl',
            image: hero1,
            desc: 'Hand made singing bowls',
        },
        {
            id: 1,
            productTitle: 'Round sevel chakra bowl',
            category: 'Round sevel chakra bowl',
            image: hero1,
            desc: 'Hand made singing bowls',
        },
        {
            id: 1,
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
                heading="TINGSHA"
                subheading="SOUND THAT GROUNDS, VIBRATION THAT HEALS"
                description="More than just a musical note — each singing bowl creates powerful frequencies that help release stress, deepen focus, and invite inner peace into your daily life."
                bgColor="#ffe9f0"
            />
        </>


    )
}

export default Tingsha
