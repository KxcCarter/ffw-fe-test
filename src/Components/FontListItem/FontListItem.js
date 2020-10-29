import React from 'react';
import styles from '../FontListItem/FontListItem.styles.module.css';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// MUI
import { Box } from '@material-ui/core';

// Components
import FontColorBox from '../FontColorBox/FontColorBox';

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
          colorLabel={props.colorLabel}
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
