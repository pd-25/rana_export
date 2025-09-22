import React from 'react'
import styles from '@/app/__assets/style/component/products.module.css'
import Image from 'next/image'
import hero1 from '@/app/__assets/images/hero1.png'
import first1 from '@/app/__assets/images/first1.png'
import first2 from '@/app/__assets/images/first2.png'
import first3 from '@/app/__assets/images/first3.png'
import first4 from '@/app/__assets/images/first4.png'
import downArrowCircle from '@/app/__assets/images/downArrowCircle.png'

import plus from '@/app/__assets/images/icons/plus.svg'
import ExploreButton from '@/app/__component/__frontend/pages/home/ExploreButton.jsx'

const Products = ({ data = [], heading = '', subheading = '', description = '', bgColor }) => {
    return (
        <>

            {/* Products Section */}
            <section className={styles['products-main']} style={{ '--cardBg': bgColor || '#efcfce' }}>

                {heading && (
                    <div className={styles['bowls-info']} >
                        <h3>
                            {heading} <span className={styles['circle-icon']}>
                                <Image src={downArrowCircle} alt="" width={60} height={60} />
                            </span>
                        </h3>
                        {subheading && <h4>{subheading}</h4>}
                        {description && <p>{description}</p>}
                    </div>
                )}

                <div className={styles['product-inner']}>
                    {Array.isArray(data) && data.length > 0 && data.map((item) => (
                        <div className={styles.card} key={item?.id || Math.random()}>
                            <div className={styles['card-inner']}>
                                <div className={styles['card-img']}>
                                    {item?.image && <Image src={item.image} alt="" />}
                                    {item?.category && (
                                        <div className={styles['product-min-title']}>
                                            <p>{item.category}</p>
                                        </div>
                                    )}
                                </div>
                                <div className={styles['product-desc-main']}>
                                    <div className={styles['product-desc-inner']}>
                                        {item?.productTitle && <p className={styles['product-title']}>{item.productTitle.length > 30
                                            ? item.productTitle.slice(0, 30) + "..."
                                            : item.productTitle}</p>}
                                        <div className={styles.lower}>
                                            {item?.desc && <p>{item.desc.length > 50
      ? item.desc.slice(0, 45) + ".." 
      : item.desc}</p>}
                                            <button>
                                                <Image src={plus} width={15} height={15} alt="" />
                                                Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
                <ExploreButton />
            </section>
        </>

    )
}

export default Products
