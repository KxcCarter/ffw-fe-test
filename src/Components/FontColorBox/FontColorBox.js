import React from 'react';
import styles from '../FontColorBox/FontColorBox.styles.module.css';

const FontColorBox = (props) => {
  return (
    <div className={styles.box}>
      <div className={styles.innerBox} style={{ backgroundColor: props.color }}>
        <h2 className={styles.abbr}>{props.abbr}</h2>
      </div>

      <h1>{props.label}</h1>
    </div>
  );
};

export default FontColorBox;
