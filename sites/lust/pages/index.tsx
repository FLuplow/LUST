import React from "react";
import styles from "./index.module.scss";

export const Index = () => {
  return (
    <div className={styles.landingpage}>
      <div className={styles.hero}>
        <h1>Real Itätsverlust</h1>
        <img src="../assets/lust_large.png" alt="LUST" />
      </div>
    </div>
  );
};
