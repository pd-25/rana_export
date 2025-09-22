import React from 'react'
import styles from '@/app/__assets/style/component/testimonial.module.css'
import Image from 'next/image'
import man from '@/app/__assets/images/man.png'
import quote from '@/app/__assets/images/quote.png'
import quote1st from '@/app/__assets/images/quote1st.png'

const Testimonial = () => {
    return (
        <>
            {/* Testimonials */}
            <section className={styles["testimonial-section"]}>
                <h1 className={styles["testimonial-title"]}>TRUSTED BY PEOPLE WHO VALUE QUALITY</h1>
                <div className={styles["testimonial-container"]}>
                    {/* Card 1 */}
                    <div className={styles["testimonial-card"]}>
                        <div className={styles["testimonial-avatar"]}>
                            <Image src={man} alt="User" width={100} height={100} />
                        </div>
                        <div className={styles["testimonial-quote"]}>
                            <Image className={styles["quote"]} src={quote1st} alt="" width={30} height={30} />
                        </div>
                        <p className={styles["testimonial-text"]}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
                            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                            volutpat.
                        </p>
                        <div className={styles["testimonial-quote-right"]}>
                            <Image className={styles["quote"]} src={quote} alt="" width={30} height={30} />
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className={styles["testimonial-card"]}>
                        <div className={styles["testimonial-avatar"]}>
                            <Image src={man} alt="User" width={100} height={100} />
                        </div>
                        <div className={styles["testimonial-quote"]}>
                            <Image className={styles["quote"]} src={quote1st} alt="" width={30} height={30} />
                        </div>
                        <p className={styles["testimonial-text"]}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
                            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                            volutpat.
                        </p>
                        <div className={styles["testimonial-quote-right"]}>
                            <Image className={styles["quote"]} src={quote} alt="" width={30} height={30} />
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className={styles["testimonial-card"]}>
                        <div className={styles["testimonial-avatar"]}>
                            <Image src={man} alt="User" width={100} height={100} />
                        </div>
                        <div className={styles["testimonial-quote"]}>
                            <Image className={styles["quote"]} src={quote1st} alt="" width={30} height={30} />
                        </div>
                        <p className={styles["testimonial-text"]}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
                            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                            volutpat.
                        </p>
                        <div className={styles["testimonial-quote-right"]}>
                            <Image className={styles["quote"]} src={quote} alt="" width={30} height={30} />
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className={styles["testimonial-card"]}>
                        <div className={styles["testimonial-avatar"]}>
                            <Image src={man} alt="User" width={100} height={100} />
                        </div>
                        <div className={styles["testimonial-quote"]}>
                            <Image className={styles["quote"]} src={quote1st} alt="" width={30} height={30} />
                        </div>
                        <p className={styles["testimonial-text"]}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
                            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                            volutpat.
                        </p>
                        <div className={styles["testimonial-quote-right"]}>
                            <Image className={styles["quote"]} src={quote} alt="" width={30} height={30} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonial
