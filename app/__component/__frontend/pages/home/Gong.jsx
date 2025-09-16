import React from 'react'
import styles from '@/app/__assets/style/component/gong.module.css'
import Image from 'next/image'
import hero1 from '@/app/__assets/images/hero1.png'

const Gong = () => {
    return (
        <>
            {/* Gong */}
            <section className={styles["gong-main"]}>
                <div className={styles["gong-inner"]}>
                    <div className={styles["gong-titles"]}>
                        <h1 className={styles["gong-title"]}>GONG</h1>
                        <p className={styles["sub-desc"]}>SACRED SOUND, INFINITE STILLNESS</p>
                        <p className={styles["desc"]}>
                            Each Gong carries the wishdom of Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Laboriosam, repellendus Lorem ipsum
                            dolor sit amet.
                        </p>
                    </div>
                    <div className={styles["gong-cards-main"]}>
                        {/* card */}
                        <div className={styles["gong-products-main"]}>
                            <div className={styles["gong-product-inner"]}>
                                <div className={styles["gond-card"]}>
                                    <div className={styles["gong-card-inner"]}>
                                        <div className={styles["gong-card-img"]}>
                                            <Image src={hero1} alt="" />
                                            <div className={styles["gong-product-min-title"]}>
                                                <p>Lorem ipsum dolor sit amet</p>
                                            </div>
                                        </div>
                                        <div className={styles["gong-product-desc-main"]}>
                                            <div className={styles["gong-product-desc-inner"]}>
                                                <p className={styles["gong-product-title"]}>Product Title Here</p>
                                                <div className={styles["gong-lower"]}>
                                                    <p>Lorem ipsum dolor sit amet amet amet amet amet amet</p>
                                                    <button className={styles["gong-cart-btn"]}>Cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles["gond-card"]}>
                                    <div className={styles["gong-card-inner"]}>
                                        <div className={styles["gong-card-img"]}>
                                            <Image src={hero1} alt="" />
                                            <div className={styles["gong-product-min-title"]}>
                                                <p>Lorem ipsum dolor sit amet</p>
                                            </div>
                                        </div>
                                        <div className={styles["gong-product-desc-main"]}>
                                            <div className={styles["gong-product-desc-inner"]}>
                                                <p className={styles["gong-product-title"]}>Product Title Here</p>
                                                <div className={styles["gong-lower"]}>
                                                    <p>Lorem ipsum dolor sit amet amet amet amet amet amet</p>
                                                    <button className={styles["gong-cart-btn"]}>Cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles["gond-card"]}>
                                    <div className={styles["gong-card-inner"]}>
                                        <div className={styles["gong-card-img"]}>
                                            <Image src={hero1} alt="" />
                                            <div className={styles["gong-product-min-title"]}>
                                                <p>Lorem ipsum dolor sit amet</p>
                                            </div>
                                        </div>
                                        <div className={styles["gong-product-desc-main"]}>
                                            <div className={styles["gong-product-desc-inner"]}>
                                                <p className={styles["gong-product-title"]}>Product Title Here</p>
                                                <div className={styles["gong-lower"]}>
                                                    <p>Lorem ipsum dolor sit amet amet amet amet amet amet</p>
                                                    <button className={styles["gong-cart-btn"]}>Cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles["gond-card"]}>
                                    <div className={styles["gong-card-inner"]}>
                                        <div className={styles["gong-card-img"]}>
                                            <Image src={hero1} alt="" />
                                            <div className={styles["gong-product-min-title"]}>
                                                <p>Lorem ipsum dolor sit amet</p>
                                            </div>
                                        </div>
                                        <div className={styles["gong-product-desc-main"]}>
                                            <div className={styles["gong-product-desc-inner"]}>
                                                <p className={styles["gong-product-title"]}>Product Title Here</p>
                                                <div className={styles["gong-lower"]}>
                                                    <p>Lorem ipsum dolor sit amet amet amet amet amet amet</p>
                                                    <button className={styles["gong-cart-btn"]}>Cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Explore Section */}
                    <div className={styles["gong-explore"]}>
                        <div className={styles["gong-explore2"]}>
                            <div className={styles["gong-explore-inner"]}>
                                <button className={styles["gong-explore-btn"]}>
                                    EXPLORE MORE
                                    <span className={styles["arrow"]}>➔</span>
                                </button>
                            </div>
                        </div>
                        <div className={styles["gong-explore-bottom"]} />
                    </div>
                </div>
            </section>
        </>


    )
}

export default Gong
