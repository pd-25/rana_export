import React from 'react'
import styles from '@/app/__assets/style/component/banner.module.css'
import Image from 'next/image'
import hero1 from '@/app/__assets/images/hero1.png'
import hero2 from '@/app/__assets/images/light-bg-2.png'

const Banner = () => {
    return (
        <>
          <section className={styles.hero}>
            <div className={styles['hero-content']}>
                <h1>EXPLORE MINDFULNESS THROUGH SACRED SOUND</h1>
                <p>with Silent Mind Singing Bowls</p>
                <a href="#" className={styles.cta}>
                    EXPLORE THE SILENCE
                </a>
            </div>
            {/* Bowl Image */}
            <div className={styles.bowl}>
                <Image src={hero1} alt="Singing Bowl" />
            </div>
        </section>
        <div className={styles.nextimage2}></div>
        </>
      


    )
}

export default Banner
