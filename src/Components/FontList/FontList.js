import React from 'react';

// Redux
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import FontListItem from '../FontListItem/FontListItem';

const FontList = (props) => {
  const previewBoxes = props.store.myFontsResponse.content.map(
    (item, index) => {
      return (
        <FontListItem
          key={index}
          label={item.label}
          id={item.id}
          abbr={item.abbr}
          color={item.color}
          size="100"
        />
      );
    }
  );

  return previewBoxes;
};

export default connect(mapStoreToProps)(FontList);
