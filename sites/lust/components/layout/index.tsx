import React from 'react'
import styles from './index.module.scss'
import '@snowstorm/core/base.css'
import './global.css'
export const Layout: React.FC = ({ children }) => (
  <div className={styles.layout}>
    <div className={styles.content}>{children}</div>
    <div className={styles.footer}>
      {' '}
      <span>
        built with{' '}
        <a href="https://snowstorm.js.org" target="_blank" rel="noreferrer">
          Snowstorm
        </a>
      </span>
    </div>
  </div>
)
