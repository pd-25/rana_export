import React from 'react'
import styles from '@/app/__assets/style/component/testimonial.module.css'
import Image from 'next/image'
import videos from '@/app/__assets/images/videos.jpg'

const ProductsVideo = () => {
    return (
        <>
            {/* Our Product Videos */}
            <section className={styles["products-video-section"]}>
                <h1 className={styles["video-title"]}>OUR PRODUCTS VIDEO</h1>
                <div className={styles["video-container"]}>
                    {/* Video Card 1 */}
                    <div className={styles["video-card"]}>
                        <div className={styles["video-thumbnail"]}>
                            <Image src={videos} alt="Video 1" width={500} height={185} />
                            <div className={styles["play-icon"]}>►</div>
                        </div>
                        <div className={styles["video-controls"]}>
                            <div className={styles["progress-bar"]}>
                                <span className={styles["progress"]} />
                            </div>
                            <div className={styles["controls-bottom"]}>
                                <div className={styles["left-controls"]}>
                                    <span>⏮</span>
                                    <span>⏯</span>
                                    <span>⏭</span>
                                </div>
                                <div className={styles["video-time"]}>03:47 / 10:00</div>
                                <div className={styles["right-controls"]}>
                                    <span>🔊</span>
                                    <span>⛶</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Video Card 2 */}
                    <div className={styles["video-card"]}>
                        <div className={styles["video-thumbnail"]}>
                            <Image src={videos} alt="Video 2" width={500} height={185} />
                            <div className={styles["play-icon"]}>►</div>
                        </div>
                        <div className={styles["video-controls"]}>
                            <div className={styles["progress-bar"]}>
                                <span className={styles["progress"]} />
                            </div>
                            <div className={styles["controls-bottom"]}>
                                <div className={styles["left-controls"]}>
                                    <span>⏮</span>
                                    <span>⏯</span>
                                    <span>⏭</span>
                                </div>
                                <div className={styles["video-time"]}>03:47 / 10:00</div>
                                <div className={styles["right-controls"]}>
                                    <span>🔊</span>
                                    <span>⛶</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Video Card 3 */}
                    <div className={styles["video-card"]}>
                        <div className={styles["video-thumbnail"]}>
                            <Image src={videos} alt="Video 3" width={500} height={185} />
                            <div className={styles["play-icon"]}>►</div>
                        </div>
                        <div className={styles["video-controls"]}>
                            <div className={styles["progress-bar"]}>
                                <span className={styles["progress"]} />
                            </div>
                            <div className={styles["controls-bottom"]}>
                                <div className={styles["left-controls"]}>
                                    <span>⏮</span>
                                    <span>⏯</span>
                                    <span>⏭</span>
                                </div>
                                <div className={styles["video-time"]}>03:47 / 10:00</div>
                                <div className={styles["right-controls"]}>
                                    <span>🔊</span>
                                    <span>⛶</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductsVideo
