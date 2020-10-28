import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import mapStoreToProps from './redux/mapStoreToProps';
import './App.css';

// MUI
import { Container, Grid, Box } from '@material-ui/core';

// Components
import Header from './Components/Header/Header';
import MyFonts from './Components/MyFonts/MyFonts';
import BuyFonts from './Components/BuyFonts/BuyFonts';
import Footer from './Components/Footer/Footer';

const App = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'GET_TABS' });
  }, [dispatch]);

  const { store } = props;
  console.log('props match from APP.js', props.match);
  return (
    <React.Fragment>
      {store.tabs[0] && (
        <Container maxWidth="md">
          <Grid container spacing={2}>
            <Router>
              <Grid item xs={12}>
                <Box p={1} pb={0}>
                  <Header />
                </Box>
              </Grid>
              <Box className="container">
                <Redirect exact from="/" to="/fonts_a" />
                <Route exact path="/fonts_a" component={MyFonts} />
                <Route exact path="/fonts_b" component={BuyFonts} />
              </Box>
            </Router>
            <Footer />
          </Grid>
        </Container>
      )}
    </React.Fragment>
  );
};

export default connect(mapStoreToProps)(App);
