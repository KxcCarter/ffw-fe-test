import React from 'react';

// MUI
import { Box } from '@material-ui/core';

// Components

import FontColorBox from '../FontColorBox/FontColorBox';

const SelectedFontDisplay = (props) => {
  return (
    <Box>
      <FontColorBox size="200" />
    </Box>
  );
};

export default SelectedFontDisplay;
