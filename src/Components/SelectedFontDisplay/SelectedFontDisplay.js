import React from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// MUI
import { Box } from '@material-ui/core';

// Components

import FontColorBox from '../FontColorBox/FontColorBox';

const SelectedFontDisplay = (props) => {
  return (
    <Box>
      <FontColorBox size={props.size} color={props.color} abbr={props.abbr} />
      <ul>
        <li>{props.label}</li>
      </ul>
    </Box>
  );
};

export default connect(mapStoreToProps)(SelectedFontDisplay);
