import React from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import styles from '../Header/Header.styles.module.css';

// MUI
import { Button, Grid, Box } from '@material-ui/core';

const Header = (props) => {
  return (
    <Grid container spacing={2} direction="row" justify="space-between">
      <Grid item xs={12} sm={6}>
        <h1>Please select one font</h1>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box>
          <Button variant="text">{props.store.tabs[0].label}</Button>
          <Button variant="text">{props.store.tabs[1].label}</Button>
        </Box>
        {/* <h5 className={styles.tab}>my fonts</h5>
        <h5 className={styles.tab}>buy fonts</h5> */}
      </Grid>
    </Grid>
  );
};

export default connect(mapStoreToProps)(Header);
