import React from 'react'
import styles from '@/app/__assets/style/component/footer.module.css'

const Footer = () => {
  return (
    <>
      {/* Footer Section */}
      <section className={styles.footer}>
        <div className={styles['footer-inner']}>
          <div className={styles['footer-left']}>
            <div className={styles['footer-title']}>
              <h2>Our Story</h2>
            </div>
            <div className={styles.content}>
              <p>
                We are known as the reputed manufacturer of a wide assortment of
                HAND MADE SINGING BOWL , Tibetan Singing Bowl and Bell. GONG AND
                CYMBLE AND TINGSHA , These products are famous for their simple
                design and easy to use.
              </p>
            </div>
            <div className={styles.content}>
              <p>
                We are known as the reputed manufacturer of a wide assortment of
                HAND MADE SINGING BOWL , Tibetan Singing Bowl and Bell. GONG AND
                CYMBLE AND TINGSHA , These products are famous for their simple
                design and easy to use.
              </p>
            </div>
            <div className={styles.content}>
              <p>
                We are known as the reputed manufacturer of a wide assortment of
                HAND MADE SINGING BOWL , Tibetan Singing Bowl and Bell. GONG AND
                CYMBLE AND TINGSHA , These products are famous for their simple
                design and easy to use.
              </p>
            </div>
          </div>

          <div className={styles['footer-mid']}>
            <div className={styles['footer-mid-inner']}>
              <div className={styles.mm}>
                <div className={styles['mid-title']}>
                  <h2>Resources</h2>
                </div>
                <div className={styles.content}>
                  <ul>
                    <li><a href="#">Delivery Information</a></li>
                    <li><a href="#">Terms &amp; Condition</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Payment</a></li>
                  </ul>
                </div>
              </div>

              <div className={styles.mm}>
                <div className={styles['mid-title']}>
                  <h2>Helpful Links</h2>
                </div>
                <div className={styles.content}>
                  <ul>
                    <li><a href="#">Newsletter</a></li>
                    <li><a href="#">Become a customer</a></li>
                    <li><a href="#">Testimonials</a></li>
                    <li><a href="#">Payment</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Map Frame */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.21689582619!2d88.26494964376381!3d22.53556493830009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1757873720444!5m2!1sen!2sin"
              width="100%"
              height={300}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className={styles['footer-right']}>
            <div className={styles['footer-right-inner']}>
              <div className={styles['mid-title']}>
                <h2>Contact</h2>
              </div>
              <div className={styles.ranaji}>
                <strong>Chandi (RANA JI)</strong>
              </div>
              <div className={styles.content}>
                <ul>
                  <li><a href="#"><strong>HEAD OFFICE FACTORY:</strong></a></li>
                  <li><a href="#">Ramjibanpur, Paschim Medinipur,</a></li>
                  <li><a href="#">West Bengal, Pincode - 721242 <br /></a></li>
                  <li><a href="#"> Mobile: +91 90029 29605</a></li>
                </ul>
                <ul>
                  <li><a href="#"><strong>HEAD OFFICE FACTORY:</strong></a></li>
                  <li><a href="#">Ramjibanpur, Paschim Medinipur,</a></li>
                  <li><a href="#">West Bengal, Pincode - 721242 <br /></a></li>
                  <li><a href="#"> Mobile: +91 90029 29605</a></li>
                </ul>
                <ul>
                  <li><a href="#"><strong>HEAD OFFICE FACTORY:</strong></a></li>
                  <li><a href="#">Ramjibanpur, Paschim Medinipur,</a></li>
                  <li><a href="#">West Bengal, Pincode - 721242 <br /></a></li>
                  <li><a href="#"> Mobile: +91 90029 29605</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={styles['bottom-footer']}>
          <p>Copyright © 2025 Rana Export Trading House</p>
        </div>
      </section>
    </>
  )
}

export default Footer
