import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import styles from '../Header/Header.styles.module.css';

// MUI
import { Grid, Box } from '@material-ui/core';

const Header = (props) => {
  const [currentTab, setCurrentTab] = useState(101);

  const tabs = props.store.tabs.map((item, index) => {
    return (
      <Link
        onClick={() => {
          setCurrentTab(item.id);
        }}
        key={index}
        to={item.content_endpoint}
        style={{
          textDecoration: 'none',
          color: currentTab === item.id ? 'grey' : 'orange',
        }}
      >
        <h5 className={styles.tab}>{item.label}</h5>
      </Link>
    );
  });

  return (
    <Grid
      container
      spacing={3}
      direction="row"
      justify="space-between"
      alignItems="baseline"
    >
      <Grid item xs={12} sm={7} md={9}>
        <h1>Please select one font</h1>
      </Grid>

      <Grid item xs={12} sm={5} md={3}>
        <Box>{tabs}</Box>
      </Grid>
    </Grid>
  );
};

export default connect(mapStoreToProps)(Header);
