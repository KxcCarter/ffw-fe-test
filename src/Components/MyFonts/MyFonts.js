import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// MUI
import { Grid } from '@material-ui/core';

// Components
import FontList from '../FontList/FontList';
import SelectedFontDisplay from '../SelectedFontDisplay/SelectedFontDisplay';

const style = {
  padding: '30px',
};

const MyFonts = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = 'This is the My Fonts page';
    dispatch({ type: 'GET_MY_FONTS', payload: props.match.path });
  }, [dispatch, props.match.path]);

  return (
    <Grid container spacing={5} style={style}>
      <Grid item xs={12} sm={5}>
        <SelectedFontDisplay
          size="200"
          label={props.store.selectedFont.label || 'NA'}
          color={props.store.selectedFont.color || 'black'}
          abbr={props.store.selectedFont.abbr || 'NA'}
        />
      </Grid>
      {props.store.myFonts.type && (
        <Grid item xs={12} sm={7}>
          <div>{props.store.myFonts.content && <FontList />}</div>
        </Grid>
      )}
    </Grid>
  );
};

export default connect(mapStoreToProps)(MyFonts);
