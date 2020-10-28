import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import mapStoreToProps from './redux/mapStoreToProps';
import './App.css';

// MUI
import { Container, Grid } from '@material-ui/core';

// Components
import Header from './Components/Header/Header';
import MyFonts from './Components/MyFonts/MyFonts';
import BuyFonts from './Components/BuyFonts/BuyFonts';

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
            <Router>
              <Grid item xs={12}>
                <Header />
              </Grid>
              <Route exact path="/fonts_a" component={MyFonts} />
              <Route exact path="/fonts_b" component={BuyFonts} />
            </Router>
          </Grid>
        </Container>
      )}
    </>
  );
};

export default connect(mapStoreToProps)(App);
