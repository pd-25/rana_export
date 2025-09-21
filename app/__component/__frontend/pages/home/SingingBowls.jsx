import React from 'react'
import styles from '@/app/__assets/style/component/singingbowls.module.css'
import Image from 'next/image'
import hero1 from '@/app/__assets/images/hero1.png'
import Products from './Products'

const SingingBowls = () => {
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
            {/* singing-bowls-section */}
            <section className={styles['singing-bowls-section']}>
                <div className={styles['mandala-bg']} />
                <div className={styles['singing-bowls-content']}>
                    <h2>DISCOVER YOUR SINGING BOWLS &amp; SO MUCH MORE</h2>

                    <div className={styles['bowls-buttons']}>
                        <button className={styles['bowl-btn']}>SINGING BOWL</button>
                        <button className={`${styles['bowl-btn']} ${styles.dark}`}>GONG</button>
                        <button className={`${styles['bowl-btn']} ${styles.accent}`}>TINGSHA</button>
                        <button className={`${styles['bowl-btn']} ${styles.dark}`}>BELL &amp; DORJEE</button>
                        <button className={styles['bowl-btn']}>STICK</button>
                        <button className={`${styles['bowl-btn']} ${styles.dark}`}>CUSHION</button>
                        <button className={`${styles['bowl-btn']} ${styles.accent}`}>OTHERS PRODUCT</button>
                    </div>


                </div>
                <Products
                    data={products}
                    heading="SINGING BOWL"
                    subheading="SOUND THAT GROUNDS, VIBRATION THAT HEALS"
                    description="More than just a musical note — each singing bowl creates powerful frequencies that help release stress, deepen focus, and invite inner peace into your daily life."
                    bgColor="#efcfce"
                />

                <Products
                    data={products}
                    bgColor="#efcfce"
                />

                <Products
                    data={products}
                    bgColor="#efcfce"
                />


            </section>

        </>

    )
}

export default SingingBowls
