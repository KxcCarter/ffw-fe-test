import React from 'react';
import styles from '../FontListItem/FontListItem.styles.module.css';

// Redux
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import FontColorBox from '../FontColorBox/FontColorBox';
import { Box } from '@material-ui/core';

const FontListItem = (props) => {
  return (
    <Box className={styles.listBox}>
      <div>
        <FontColorBox
          id={props.id}
          abbr={props.abbr}
          color={props.color}
          size={props.size}
        />
      </div>
      <div className={styles.label}>
        <ul>
          <li>{props.label}</li>
        </ul>
      </div>
    </Box>
  );
};

export default connect(mapStoreToProps)(FontListItem);
