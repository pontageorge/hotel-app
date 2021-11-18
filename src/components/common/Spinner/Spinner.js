import React from "react";
import styles from "./Spinner.module.css";

const Spinner = ({ minified, style }) => {
  return minified ? (
    <div className={styles.minified} style={style} />
  ) : (
    <div className={styles.loader} style={style}></div>
  );
};

export default Spinner;
