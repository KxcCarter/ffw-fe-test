import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import styles from '../Header/Header.styles.module.css';

// MUI
import { Button, Grid, Box } from '@material-ui/core';

const Header = (props) => {
  const tabs = props.store.tabs.map((item, index) => {
    return (
      <Link to={item.content_endpoint}>
        <h5 className={styles.tab}>{item.label}</h5>
      </Link>
    );
  });

  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justify="space-between"
      alignItems="center"
    >
      <Grid item xs={12} sm={6}>
        <h1>Please select one font</h1>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Box>{tabs}</Box>
      </Grid>
    </Grid>
  );
};

export default connect(mapStoreToProps)(Header);
