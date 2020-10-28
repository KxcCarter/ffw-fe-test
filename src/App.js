import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect, useDispatch } from 'react-redux';
import mapStoreToProps from './redux/mapStoreToProps';
import './App.css';

// MUI
import { Container, Grid } from '@material-ui/core';

// Components
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';

const App = (props) => {
  const [data, setData] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    // getLorem();
    dispatch({ type: 'GET_BUY_FONTS' });
    dispatch({ type: 'GET_MY_FONTS' });
    dispatch({ type: 'GET_TABS' });
  }, [dispatch]);

  const { store } = props;

  // const getLorem = async () => {
  //   try {
  //     const resp = await axios.get('http://json.ffwagency.md/fonts_b');
  //     console.log(resp.data);
  //     setData(resp.data.content);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  return (
    <>
      {store.tabs[0] && (
        <Container maxWidth="md">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Header />
            </Grid>

            <Body />
          </Grid>
        </Container>
      )}
    </>
  );
};

export default connect(mapStoreToProps)(App);
