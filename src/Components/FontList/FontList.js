import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Components
import FontListItem from '../FontListItem/FontListItem';

const FontList = (props) => {
  const [selected, setSelected] = useState(false);
  const dispatch = useDispatch();

  const onClick = (props) => {
    console.log({ props });
    dispatch({
      type: 'SET_SELECTED_FONT',
      payload: props,
    });

    setSelected(props.id);
  };

  const previewBoxes = props.store.myFonts.content.map((item, index) => {
    return (
      <FontListItem
        key={index}
        label={item.label}
        id={item.id}
        abbr={item.abbr}
        color={item.color}
        colorLabel={item['color-blind-label']}
        size="100"
        onClick={onClick}
        selected={selected}
      />
    );
  });

  return previewBoxes;
};

export default connect(mapStoreToProps)(FontList);
