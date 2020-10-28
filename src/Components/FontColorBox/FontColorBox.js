import React from 'react';
import styles from '../FontColorBox/FontColorBox.styles.module.css';

// MUI
import { Typography } from '@material-ui/core';

const FontColorBox = (props) => {
  const boxProps = {
    box: {
      width: `${props.size}px`,
      height: `${props.size}px`,
      border: props.selected
        ? `3px solid rgba(0, 0, 0, 0.5)`
        : '2px solid black',
    },
    abbr: {
      fontSize: props.fontSize || '1.3rem',
    },
  };
  return (
    <div className={styles.box} style={boxProps.box}>
      <div className={styles.innerBox} style={{ backgroundColor: props.color }}>
        <h2 className={styles.abbr} style={boxProps.abbr}>
          {props.abbr}
        </h2>
        {/* <Typography variant={props.fontSize || 'h4'} className={styles.abbr}>
          {props.abbr}
        </Typography> */}
      </div>

      <h1>{props.label}</h1>
    </div>
  );
};

export default FontColorBox;
