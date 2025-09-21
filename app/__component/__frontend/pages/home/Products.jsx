import React from 'react'
import styles from '@/app/__assets/style/component/products.module.css'
import Image from 'next/image'
import hero1 from '@/app/__assets/images/hero1.png'

const Products = () => {
    return (
        <>
            {/* Products Section */}
            <section className={styles['products-main']}>
                <div className={styles['product-inner']}>
                    <div className={styles.card}>
                        <div className={styles['card-inner']}>
                            <div className={styles['card-img']}>
                                <Image src={hero1} alt="" />
                                <div className={styles['product-min-title']}>
                                    <p>Lorem ipsum dolor sit amet</p>
                                </div>
                            </div>
                            <div className={styles['product-desc-main']}>
                                <div className={styles['product-desc-inner']}>
                                    <p className={styles['product-title']}>Product Title Here</p>
                                    <div className={styles.lower}>
                                        <p>Lorem ipsum dolor sit amet amet amet amet amet amet</p>
                                        <button>Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles['card-inner']}>
                            <div className={styles['card-img']}>
                                <Image src={hero1} alt="" />
                                <div className={styles['product-min-title']}>
                                    <p>Lorem ipsum dolor sit amet</p>
                                </div>
                            </div>
                            <div className={styles['product-desc-main']}>
                                <div className={styles['product-desc-inner']}>
                                    <p className={styles['product-title']}>Product Title Here</p>
                                    <div className={styles.lower}>
                                        <p>Lorem ipsum dolor sit amet amet amet amet amet amet</p>
                                        <button>Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles['card-inner']}>
                            <div className={styles['card-img']}>
                                <Image src={hero1} alt="" />
                                <div className={styles['product-min-title']}>
                                    <p>Lorem ipsum dolor sit amet</p>
                                </div>
                            </div>
                            <div className={styles['product-desc-main']}>
                                <div className={styles['product-desc-inner']}>
                                    <p className={styles['product-title']}>Product Title Here</p>
                                    <div className={styles.lower}>
                                        <p>Lorem ipsum dolor sit amet amet amet amet amet amet</p>
                                        <button>Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles['card-inner']}>
                            <div className={styles['card-img']}>
                                <Image src={hero1} alt="" />
                                <div className={styles['product-min-title']}>
                                    <p>Lorem ipsum dolor sit amet</p>
                                </div>
                            </div>
                            <div className={styles['product-desc-main']}>
                                <div className={styles['product-desc-inner']}>
                                    <p className={styles['product-title']}>Product Title Here</p>
                                    <div className={styles.lower}>
                                        <p>Lorem ipsum dolor sit amet amet amet amet amet amet</p>
                                        <button>Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Explore Section */}
            <section className={styles.explore}>
                <div className={styles.explore2}>
                    <div className={styles['explore-inner']}>
                        <button className={styles['explore-btn']}>
                            EXPLORE MORE
                            <span className={styles.arrow}>➔</span>
                        </button>
                    </div>
                </div>
                <div className={styles['explore-bottom']} />
            </section>

            {/* <section className={styles['products-main']}>
                <div className={styles['product-inner']}>
                    <div className={styles.card}>
                        <div className={styles['card-inner']}>
                            <div className={styles['card-img']}>
                                <Image src={hero1} alt="" />
                                <div className={styles['product-min-title']}>
                                    <p>Lorem ipsum dolor sit amet</p>
                                </div>
                            </div>
                            <div className={styles['product-desc-main']}>
                                <div className={styles['product-desc-inner']}>
                                    <p className={styles['product-title']}>Product Title Here</p>
                                    <div className={styles.lower}>
                                        <p>Lorem ipsum dolor sit amet amet amet amet amet amet</p>
                                        <button>Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles['card-inner']}>
                            <div className={styles['card-img']}>
                                <Image src={hero1} alt="" />
                                <div className={styles['product-min-title']}>
                                    <p>Lorem ipsum dolor sit amet</p>
                                </div>
                            </div>
                            <div className={styles['product-desc-main']}>
                                <div className={styles['product-desc-inner']}>
                                    <p className={styles['product-title']}>Product Title Here</p>
                                    <div className={styles.lower}>
                                        <p>Lorem ipsum dolor sit amet amet amet amet amet amet</p>
                                        <button>Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles['card-inner']}>
                            <div className={styles['card-img']}>
                                <Image src={hero1} alt="" />
                                <div className={styles['product-min-title']}>
                                    <p>Lorem ipsum dolor sit amet</p>
                                </div>
                            </div>
                            <div className={styles['product-desc-main']}>
                                <div className={styles['product-desc-inner']}>
                                    <p className={styles['product-title']}>Product Title Here</p>
                                    <div className={styles.lower}>
                                        <p>Lorem ipsum dolor sit amet amet amet amet amet amet</p>
                                        <button>Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles['card-inner']}>
                            <div className={styles['card-img']}>
                                <Image src={hero1} alt="" />
                                <div className={styles['product-min-title']}>
                                    <p>Lorem ipsum dolor sit amet</p>
                                </div>
                            </div>
                            <div className={styles['product-desc-main']}>
                                <div className={styles['product-desc-inner']}>
                                    <p className={styles['product-title']}>Product Title Here</p>
                                    <div className={styles.lower}>
                                        <p>Lorem ipsum dolor sit amet amet amet amet amet amet</p>
                                        <button>Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.explore}>
                <div className={styles.explore2}>
                    <div className={styles['explore-inner']}>
                        <button className={styles['explore-btn']}>
                            EXPLORE MORE
                            <span className={styles.arrow}>➔</span>
                        </button>
                    </div>
                </div>
                <div className={styles['explore-bottom']} />
            </section>

            <section className={styles['products-main']}>
                <div className={styles['product-inner']}>
                    <div className={styles.card}>
                        <div className={styles['card-inner']}>
                            <div className={styles['card-img']}>
                                <Image src={hero1} alt="" />
                                <div className={styles['product-min-title']}>
                                    <p>Lorem ipsum dolor sit amet</p>
                                </div>
                            </div>
                            <div className={styles['product-desc-main']}>
                                <div className={styles['product-desc-inner']}>
                                    <p className={styles['product-title']}>Product Title Here</p>
                                    <div className={styles.lower}>
                                        <p>Lorem ipsum dolor sit amet amet amet amet amet amet</p>
                                        <button>Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles['card-inner']}>
                            <div className={styles['card-img']}>
                                <Image src={hero1} alt="" />
                                <div className={styles['product-min-title']}>
                                    <p>Lorem ipsum dolor sit amet</p>
                                </div>
                            </div>
                            <div className={styles['product-desc-main']}>
                                <div className={styles['product-desc-inner']}>
                                    <p className={styles['product-title']}>Product Title Here</p>
                                    <div className={styles.lower}>
                                        <p>Lorem ipsum dolor sit amet amet amet amet amet amet</p>
                                        <button>Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles['card-inner']}>
                            <div className={styles['card-img']}>
                                <Image src={hero1} alt="" />
                                <div className={styles['product-min-title']}>
                                    <p>Lorem ipsum dolor sit amet</p>
                                </div>
                            </div>
                            <div className={styles['product-desc-main']}>
                                <div className={styles['product-desc-inner']}>
                                    <p className={styles['product-title']}>Product Title Here</p>
                                    <div className={styles.lower}>
                                        <p>Lorem ipsum dolor sit amet amet amet amet amet amet</p>
                                        <button>Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles['card-inner']}>
                            <div className={styles['card-img']}>
                                <Image src={hero1} alt="" />
                                <div className={styles['product-min-title']}>
                                    <p>Lorem ipsum dolor sit amet</p>
                                </div>
                            </div>
                            <div className={styles['product-desc-main']}>
                                <div className={styles['product-desc-inner']}>
                                    <p className={styles['product-title']}>Product Title Here</p>
                                    <div className={styles.lower}>
                                        <p>Lorem ipsum dolor sit amet amet amet amet amet amet</p>
                                        <button>Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.explore}>
                <div className={styles.explore2}>
                    <div className={styles['explore-inner']}>
                        <button className={styles['explore-btn']}>
                            EXPLORE MORE
                            <span className={styles.arrow}>➔</span>
                        </button>
                    </div>
                </div>
                <div className={styles['explore-bottom']} />
            </section> */}


        </>

    )
}

export default Products
