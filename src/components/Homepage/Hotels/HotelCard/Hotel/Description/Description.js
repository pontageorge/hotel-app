import React from "react";

import styles from "./Description.module.css";

export default function Description({ description }) {
  return (
    <div className={styles.componentWrap}>
      <p>&quot;{description}&quot;</p>
    </div>
  );
}
