import React from 'react'
import styles from '@/app/__assets/style/component/goals.module.css'
import Image from "next/image";
import goal1 from '@/app/__assets/images/goal1.jpg'

const Goals = () => {
    return (
        <>
            {/* Goals */}
            <section className={styles["goals-main"]}>
                <div className={styles["goals-inner"]}>
                    <div className={styles["goals-left"]}>
                        <div className={styles["goals-left-inner"]}>
                            <div className={styles["left"]}>
                                <h2>CORPORATE SOCIAL RESPONSIBILITIES</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Officia dolores accusamus totam laboriosam, modi quaerat
                                    earum. Asperiores neque velit hic.
                                </p>
                            </div>
                            <div className={styles["right"]}>
                                <Image src={goal1} alt="Corporate Social Responsibility" />
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Nemo, saepe aperiam tempora nulla consectetur dignissimos.
                                </p>
                            </div>
                        </div>
                        <button className={styles["know-more-btn"]}>Know More</button>
                    </div>

                    <div className={styles["goals-right"]}>
                        <div className={styles["goals-left-inner"]}>
                            <div className={styles["left"]}>
                                <h2>CORPORATE SOCIAL RESPONSIBILITIES</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Officia dolores accusamus totam laboriosam, modi quaerat
                                    earum. Asperiores neque velit hic.
                                </p>
                            </div>
                            <div className={styles["right"]}>
                                <Image src={goal1} alt="Corporate Social Responsibility" />
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Nemo, saepe aperiam tempora nulla consectetur dignissimos.
                                </p>
                            </div>
                        </div>
                        <button className={styles["know-more-btn"]}>Know More</button>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Goals
