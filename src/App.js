import React, { useEffect } from 'react';
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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'GET_TABS' });
  }, [dispatch]);

  const { store } = props;

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
