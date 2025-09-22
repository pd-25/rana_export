import React from 'react'
import styles from '@/app/__assets/style/component/ww.module.css'
import Image from 'next/image'
import WW from '@/app/__assets/images/worldwide.jpg'

const Wide = () => {
    return (
        <>
            {/* Our Singing Bowls */}
            <section className={styles["bowls-main"]}>
                <div className={styles["bowls-inner"]}>
                    <h1
                        className={styles["bowls-title"]}
                        style={{ marginBottom: 30 }}
                    >
                        Our Singing Bowls trusted worldwide by
                    </h1>
                    <div className={styles["bowls-body"]}>
                        <div className={styles["group"]}>
                            <Image src={WW} alt="Worldwide Partner" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className={styles["group"]}>
                            <Image src={WW} alt="Worldwide Partner" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className={styles["group"]}>
                            <Image src={WW} alt="Worldwide Partner" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className={styles["group"]}>
                            <Image src={WW} alt="Worldwide Partner" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Wide
