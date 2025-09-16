import React from 'react'
import styles from '@/app/__assets/style/component/header.module.css'
import Image from 'next/image'
import logo from '@/app/__assets/images/logo.png'

const Header = () => {
  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logo}>
        <Image src={logo} alt="Logo" />
        <div className={styles.logoText}>
          {/* <span>Rana Export</span>
          Trading House */}
        </div>
      </div>

      {/* Hamburger menu for mobile */}
      <div className={styles.hamburger} id="hamburger">
        <i className="fa-solid fa-bars" />
      </div>

      {/* Navigation */}
      <nav className={styles.nav} id="nav">
        <a href="#">HOME</a>
        <a href="#">OUR COLLECTION</a>
        <a href="#">OUR STORY</a>
        <a href="#">CRAFTED SELECTIONS</a>
        <a href="#">CONTACT</a>
      </nav>

      {/* Right side */}
      <div className={styles.headerRight}>
        <img src="https://flagcdn.com/w20/gb.png" className={styles.flag} alt="English" />
        <i className="fa-regular fa-user" />
        <i className="fa-solid fa-magnifying-glass" />
        <i className="fa-solid fa-cart-shopping" />
      </div>
    </header>
  )
}

export default Header
