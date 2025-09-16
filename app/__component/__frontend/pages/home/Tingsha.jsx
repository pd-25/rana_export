import React from 'react'
import styles from '@/app/__assets/style/component/tingsha.module.css'
import Image from 'next/image'
import hero1 from '@/app/__assets/images/hero1.png'

const Tingsha = () => {
    return (

        <>
            {/* Tingsha */}
            <section className={styles["tingash-main"]}>
                <div className={styles["tingash-inner"]}>
                    <div className={styles["tingash-titles"]}>
                        <h1 className={styles["tingash-title"]}>TINGASH</h1>
                        <p className={styles["sub-desc"]}>
                            TRADITION IN EVERY STRIKE, HERMONY IN EVERY TONE
                        </p>
                        <p className={styles["desc"]}>
                            Each Gong carries the wishdom of Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Laboriosam, repellendus Lorem ipsum
                            dolor sit amet.
                        </p>
                    </div>
                    <div className={styles["tingash-cards-main"]}>
                        {/* card */}
                        <div className={styles["tingash-products-main"]}>
                            <div className={styles["tingash-product-inner"]}>
                                <div className={styles["tingash-card"]}>
                                    <div className={styles["tingash-card-inner"]}>
                                        <div className={styles["tingash-card-img"]}>
                                            <Image src={hero1} alt="" />
                                            <div className={styles["tingash-product-min-title"]}>
                                                <p>Lorem ipsum dolor sit amet</p>
                                            </div>
                                        </div>
                                        <div className={styles["tingash-product-desc-main"]}>
                                            <div className={styles["tingash-product-desc-inner"]}>
                                                <p className={styles["tingash-product-title"]}>Product Title Here</p>
                                                <div className={styles["tingash-lower"]}>
                                                    <p>Lorem ipsum dolor sit amet amet amet amet amet amet</p>
                                                    <button className={styles["tingash-cart-btn"]}>Cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Repeat Cards */}
                                <div className={styles["tingash-card"]}>
                                    <div className={styles["tingash-card-inner"]}>
                                        <div className={styles["tingash-card-img"]}>
                                            <Image src={hero1} alt="" />
                                            <div className={styles["tingash-product-min-title"]}>
                                                <p>Lorem ipsum dolor sit amet</p>
                                            </div>
                                        </div>
                                        <div className={styles["tingash-product-desc-main"]}>
                                            <div className={styles["tingash-product-desc-inner"]}>
                                                <p className={styles["tingash-product-title"]}>Product Title Here</p>
                                                <div className={styles["tingash-lower"]}>
                                                    <p>Lorem ipsum dolor sit amet amet amet amet amet amet</p>
                                                    <button className={styles["tingash-cart-btn"]}>Cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles["tingash-card"]}>
                                    <div className={styles["tingash-card-inner"]}>
                                        <div className={styles["tingash-card-img"]}>
                                            <Image src={hero1} alt="" />
                                            <div className={styles["tingash-product-min-title"]}>
                                                <p>Lorem ipsum dolor sit amet</p>
                                            </div>
                                        </div>
                                        <div className={styles["tingash-product-desc-main"]}>
                                            <div className={styles["tingash-product-desc-inner"]}>
                                                <p className={styles["tingash-product-title"]}>Product Title Here</p>
                                                <div className={styles["tingash-lower"]}>
                                                    <p>Lorem ipsum dolor sit amet amet amet amet amet amet</p>
                                                    <button className={styles["tingash-cart-btn"]}>Cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles["tingash-card"]}>
                                    <div className={styles["tingash-card-inner"]}>
                                        <div className={styles["tingash-card-img"]}>
                                            <Image src={hero1} alt="" />
                                            <div className={styles["tingash-product-min-title"]}>
                                                <p>Lorem ipsum dolor sit amet</p>
                                            </div>
                                        </div>
                                        <div className={styles["tingash-product-desc-main"]}>
                                            <div className={styles["tingash-product-desc-inner"]}>
                                                <p className={styles["tingash-product-title"]}>Product Title Here</p>
                                                <div className={styles["tingash-lower"]}>
                                                    <p>Lorem ipsum dolor sit amet amet amet amet amet amet</p>
                                                    <button className={styles["tingash-cart-btn"]}>Cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Explore Section */}
                    <div className={styles["tingash-explore"]}>
                        <div className={styles["tingash-explore2"]}>
                            <div className={styles["tingash-explore-inner"]}>
                                <button className={styles["tingash-explore-btn"]}>
                                    EXPLORE MORE
                                    <span className={styles["arrow"]}>➔</span>
                                </button>
                            </div>
                        </div>
                        <div className={styles["tingash-explore-bottom"]} />
                    </div>
                </div>
            </section>
        </>



    )
}

export default Tingsha
