import React from 'react';
import styles from '../Header/Header.styles.module.css';

const Header = (props) => {
  return (
    <div className={styles.header}>
      <h1>Please select one font</h1>
      <div className={styles.tabsBox}>
        <h5 className={styles.tab}>my fonts</h5>
        <h5 className={styles.tab}>buy fonts</h5>
      </div>
    </div>
  );
};

export default Header;
