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
      fontSize: props.fontSize || '1.8rem',
    },
  };

  return (
    <div className={styles.box} style={boxProps.box}>
      <div
        className={styles.innerBox}
        style={{ backgroundColor: props.color }}
        aria-label={props.colorLabel}
      >
        <p className={styles.abbr} style={boxProps.abbr}>
          {props.abbr}
        </p>
      </div>

      <p>{props.label}</p>
    </div>
  );
};

export default FontColorBox;
