import React from "react";
import styles from "./styles.module.scss";

function Loading() {
  return (
    <div className={styles.loaderOuter}>
      <div className={styles.loader}>
        <div className={styles.loaderDot}></div>
        <div className={styles.loaderDot}></div>
        <div className={styles.loaderDot}></div>
        <div className={styles.loaderDot}></div>
        <div className={styles.loaderDot}></div>
        <div className={styles.loaderDot}></div>
        <div className={styles.loaderText}></div>
      </div>
    </div>
  );
}

export default Loading;
