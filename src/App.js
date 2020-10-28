import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect, useDispatch } from 'react-redux';
import mapStoreToProps from './redux/mapStoreToProps';
import './App.css';

// MUI

import { Container, Grid } from '@material-ui/core';

// Components
import Header from './Components/Header/Header';
import FontList from './Components/FontList/FontList';
import Body from './Components/Body/Body';

const App = (props) => {
  const [data, setData] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    getLorem();

    dispatch({ type: 'GET_BUY_FONTS' });
    dispatch({ type: 'GET_MY_FONTS' });
  }, [dispatch]);

  const getLorem = async () => {
    try {
      const resp = await axios.get('http://json.ffwagency.md/fonts_b');
      console.log(resp.data);
      setData(resp.data.content);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Header />
        </Grid>

        <Body />

        {/* <div className="container">
          <Grid item xs={5} sm={5}>
            <h1>Stuff here</h1>
            <div>{data}</div>
          </Grid>

          <Grid item xs={7} sm={7}>
            <div>{props.store.myFontsResponse.content && <FontList />}</div>
          </Grid>
        </div> */}
      </Grid>
    </Container>
  );
};

export default connect(mapStoreToProps)(App);
