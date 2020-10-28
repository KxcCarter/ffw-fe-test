import React from 'react';
import styles from '../FontListItem/FontListItem.styles.module.css';

// Redux
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import FontColorBox from '../FontColorBox/FontColorBox';
import { Box } from '@material-ui/core';

const FontListItem = (props) => {
  let selected;
  if (props.id === props.selected) {
    selected = true;
  }

  return (
    <Box className={styles.listBox}>
      <div onClick={() => props.onClick(props)}>
        <FontColorBox
          id={props.id}
          abbr={props.abbr}
          color={props.color}
          size={props.size}
          selected={selected}
        />
      </div>
      <div className={styles.label}>
        <ul>
          <li style={selected ? { opacity: '50%' } : null}>{props.label}</li>
        </ul>
      </div>
    </Box>
  );
};

export default connect(mapStoreToProps)(FontListItem);
