import React from 'react'
import styles from '@/app/__assets/style/component/banner.module.css'
import Image from 'next/image'
import hero1 from '@/app/__assets/images/hero1.png'
import pdf from '@/app/__assets/images/icons/pdf.png'


const Banner = () => {
    return (
        <>
        <section className={styles.hero}>
            <div className={styles.firstsection}>
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
            </div>
              <div className={styles.secondsection}>
            <div className={styles.boxcontainer}>
                <div className='box-content'>
                    <Image src={pdf} alt="pdf" width={30} height={30} />
                    <h3>PDF Catalog Available</h3>
                    <p>Discover the harmomous world of Handmade Singing Bowls' Check out our PDF With a vanety of sizes, weight, price and colors to your preferences Elevate your senses with our Indiantreasures</p>
                </div>
            </div>
            <div className={`${styles.boxcontainer} ${styles.middlebox}`}>
                <div className='box-content'>
                    <Image src={pdf} alt="pdf" width={30} height={30} />
                    <h3>PDF Catalog Available</h3>
                    <p>Discover the harmomous world of Handmade Singing Bowls' Check out our PDF With a vanety of sizes, weight, price and colors to your preferences Elevate your senses with our Indiantreasures</p>
                </div>
            </div>
            <div className={styles.boxcontainer}>
                <div className='box-content'>
                    <Image src={pdf} alt="pdf" width={30} height={30} />
                    <h3>PDF Catalog Available</h3>
                    <p>Discover the harmomous world of Handmade Singing Bowls' Check out our PDF With a vanety of sizes, weight, price and colors to your preferences Elevate your senses with our Indiantreasures</p>
                </div>
            </div>
        </div>
        </section>
        {/* <div className={styles.nextimage2}></div> */}
      
        </>
      


    )
}

export default Banner
