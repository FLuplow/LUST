import React from 'react'
import styles from './index.module.scss'

import logo from '../assets/lust_large.png'

export const Index = () => {
  return (
    <div className={styles.landingpage}>
      <div className={styles.hero}>
        <h1>Real Itätsverlust</h1>
        <img src={logo} alt="LUST" />
      </div>
    </div>
  )
}
