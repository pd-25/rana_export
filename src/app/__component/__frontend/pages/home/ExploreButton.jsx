import React from 'react'
import styles from '@/app/__assets/style/component/explore-button.module.css'
import Image from 'next/image'
import buttonArraow from '@/app/__assets/images/btn-arrow.png'


const ExploreButton = () => {
    return (
        <>
            {/* Explore Section */}
            <section className={styles.explore}>
                <div className={styles.explore2}>
                    <div className={styles['explore-inner']}>
                        <button className={styles['explore-btn']}>
                            EXPLORE MORE
                            <Image src={buttonArraow} className={styles.arrow} width={30} height={30} alt=''/>
                        </button>
                    </div>
                </div>
                <div className={styles['explore-bottom']} />
            </section>
        </>
    )
}

export default ExploreButton
