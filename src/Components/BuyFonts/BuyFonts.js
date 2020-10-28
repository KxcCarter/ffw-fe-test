import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import '../../App.css';

// MUI
import { Grid } from '@material-ui/core';

// Components
import SelectedFontDisplay from '../SelectedFontDisplay/SelectedFontDisplay';

const BuyFonts = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'GET_BUY_FONTS', payload: props.match.path });
  }, [dispatch]);

  console.log('match.params:', props.match);
  return (
    <Grid container spacing={5} className="container">
      <Grid item xs={12} sm={5}>
        <SelectedFontDisplay
          size="200"
          label={props.store.selectedFont.label || 'NA'}
          color={props.store.selectedFont.color || 'black'}
          abbr={props.store.selectedFont.abbr || 'NA'}
        />
      </Grid>
      {props.store.buyFonts.type && (
        <Grid item xs={12} sm={7}>
          <div>{props.store.buyFonts.content}</div>
        </Grid>
      )}
    </Grid>
  );
};

export default connect(mapStoreToProps)(BuyFonts);
