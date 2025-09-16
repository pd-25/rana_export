import React from 'react'
import styles from '@/app/__assets/style/component/singingbowls.module.css'
import Image from 'next/image'
import hero1 from '@/app/__assets/images/hero1.png'

const SingingBowls = () => {
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

                    <div className={styles['bowls-info']}>
                        <h3>
                            SINGING BOWL <span className={styles['circle-icon']}>◯</span>
                        </h3>
                        <h4>SOUND THAT GROUNDS, VIBRATION THAT HEALS</h4>
                        <p>
                            More than just a musical note — each singing bowl creates powerful
                            frequencies that help release stress, deepen focus, and invite inner
                            peace into your daily life.
                        </p>
                    </div>
                </div>
            </section>
        </>

    )
}

export default SingingBowls
