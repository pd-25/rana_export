import React from 'react'
import styles from '@/app/__assets/style/component/header.module.css'
import Image from 'next/image'
import logo from '@/app/__assets/images/logo.png'
import englandflag from '@/app/__assets/images/englandflag.png'
import { FaBars, FaShoppingCart, FaSearch } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";


const Header = () => {
  return (

    <>
      {/* Topbar */}
      <div className={styles["topbar"]}>QUICK DISPATCH ACROSS ALL PURCHASES</div>

      {/* Header */}
      <header className={styles["header"]}>
        {/* Logo */}
        <div className={styles["logo"]}>
          <Image src={logo} alt="Logo"/>
          <div className={styles["logo-text"]}>
            {/* <span>Rana Export</span> Trading House */}
          </div>
        </div>

        {/* Hamburger menu for mobile */}
        <div className={styles["hamburger"]} id="hamburger">
          <FaBars className={styles.faicon} />
        </div>

        {/* Navigation */}
        <nav className={styles["nav"]} id="nav">
          <a href="#">HOME</a>
          <a href="#">OUR COLLECTION</a>
          <a href="#">OUR STORY</a>
          <a href="#">CRAFTED SELECTIONS</a>
          <a href="#">CONTACT</a>
        </nav>

        {/* Right side */}
        <div className={styles["header-right"]}>
          <Image
            src={englandflag}
            className={styles["flag"]}
            alt="English"
            width={20}
            height={15}
          />
          <FaRegUser className={styles.faicon} />
          <FaSearch className={styles.faicon} />
          <FaShoppingCart className={styles.faicon} />
        </div>
      </header>
    </>
  )
}

export default Header
