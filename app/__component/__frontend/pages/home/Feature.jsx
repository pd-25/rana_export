import React from 'react'
import styles from '@/app/__assets/style/component/testimonial.module.css'
import Image from 'next/image'
import icn from '@/app/__assets/images/icn.jpg'

const Feature = () => {
    return (
        <>
            {/* Feature Section */}
            <section className={styles["features-section"]}>
                <div className={styles["feature-card"]}>
                    <Image src={icn} alt="Meditate Anywhere" width={80} height={80} />
                    <h3>Meditate Anywhere</h3>
                    <p>Lightweight and travel-friendly for on-the-go mindfulness.</p>
                </div>
                <div className={styles["feature-card"]}>
                    <Image src={icn} alt="Deep, Resonant Sound" width={80} height={80} />
                    <h3>Deep, Resonant Sound</h3>
                    <p>Promotes inner peace and spiritual connection.</p>
                </div>
                <div className={styles["feature-card"]}>
                    <Image src={icn} alt="Ergonomic Design" width={80} height={80} />
                    <h3>Ergonomic Design</h3>
                    <p>Fits comfortably in your hand for effortless use.</p>
                </div>
                <div className={styles["feature-card"]}>
                    <Image src={icn} alt="Compact & Space-Saving" width={80} height={80} />
                    <h3>Compact &amp; Space-Saving</h3>
                    <p>Perfect for your home, studio or travel bag.</p>
                </div>
            </section>
        </>
    )
}

export default Feature
