import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import '../../App.css';

// MUI
import { Grid } from '@material-ui/core';

// Components
import FontList from '../FontList/FontList';
import SelectedFontDisplay from '../SelectedFontDisplay/SelectedFontDisplay';

const Body = (props) => {
  return (
    <Grid container spacing={2} className="container">
      <Grid item xs={12} sm={5}>
        <SelectedFontDisplay
          size="200"
          label={props.store.selectedFont.label || 'NA'}
          color={props.store.selectedFont.color || 'black'}
          abbr={props.store.selectedFont.abbr || 'NA'}
        />
      </Grid>

      <Grid item xs={12} sm={7}>
        <div>{props.store.myFontsResponse.content && <FontList />}</div>
      </Grid>
    </Grid>
  );
};

export default connect(mapStoreToProps)(Body);
