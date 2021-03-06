import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import '../../App.css';

// MUI
import { Grid } from '@material-ui/core';

const style = {
  margin: 'auto',
  width: '70%',
};

const BuyFonts = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = 'This is the Buy Fonts page';
    dispatch({ type: 'GET_BUY_FONTS', payload: props.match.path });
  }, [dispatch, props.match.path]);

  return (
    <Grid item xs={12}>
      {props.store.buyFonts.type && (
        <div style={style}>{props.store.buyFonts.content}</div>
      )}
    </Grid>
  );
};

export default connect(mapStoreToProps)(BuyFonts);
