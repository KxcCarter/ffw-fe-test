import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect, useDispatch } from 'react-redux';
import mapStoreToProps from './redux/mapStoreToProps';
import './App.css';

// Components
import Header from './Components/Header/Header';
import FontList from './Components/FontList/FontList';

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
    <div className="body">
      <Header />

      <div className="container">
        <div>{data}</div>
        <div>
          <FontList />
        </div>
      </div>
    </div>
  );
};

export default connect(mapStoreToProps)(App);
