"use client"
import React, { useState, useEffect } from "react";
import styles from "@/app/__assets/style/component/banner.module.css";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";


import hero1 from '@/app/__assets/images/first1.png'
import hero2 from '@/app/__assets/images/first2.png'
import hero3 from '@/app/__assets/images/first3.png'
import hero4 from '@/app/__assets/images/first4.png'

import flower from '@/app/__assets/images/flower.png'
import flower2 from '@/app/__assets/images/flower2.png'
import handEye from '@/app/__assets/images/handEye.png'
import candle from '@/app/__assets/images/candle.png'

import pdf from '@/app/__assets/images/icons/pdf.png'

const images = [hero1, hero2, hero3];

const Banner = () => {
    const [index, setIndex] = useState(0);

    // Auto-change every 4s
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <section className={styles.hero}>
                <div className={styles.firstsection}>
                    <div className={styles['hero-content']}>
                        <h1>EXPLORE MINDFULNESS THROUGH SACRED SOUND</h1>
                        <p>with Silent Mind Singing Bowls</p>
                        <a href="#" className={styles.cta}>
                            <Image src={flower} alt="" className={styles.ctaButton} />   EXPLORE THE SILENCE
                        </a>
                    </div>
                    {/* Bowl Image */}
                    {/* Bowl Slider */}
                    <div className={styles.bowl}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: -60 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 60 }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                                className={styles.imageWrapper}
                            >
                                <Image src={images[index]} alt="Singing Bowl" priority />
                            </motion.div>
                        </AnimatePresence>
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

            <section className={styles.mindsection}>
                <div className="mind_maditaion">
                    <p className={styles.mindtitle}>Mindful <br /> <strong>Maditaion</strong></p>
                    <Image src={flower2} alt="" width={110} height={110} />
                </div>

                <div className={styles.middlebox}>
                    <p className={styles.mindtitle}>7 Chakra <br /> <strong>HEaling</strong></p>
                    <Image src={handEye} alt="" width={110} height={110} />
                </div>

                <div className="mind_maditaion">
                    <p className={styles.mindtitle}>Inner <br /> <strong>Peace</strong></p>
                    <Image src={candle} alt="" width={110} height={110} />
                </div>
            </section>

        </>



    )
}

export default Banner
