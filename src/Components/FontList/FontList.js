import React from 'react';
import styles from '../FontList/FontList.styles.module.css';

// Redux
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import FontColorBox from '../FontColorBox/FontColorBox';

const FontList = (props) => {
  const previewBoxes = props.store.myFontsResponse.content.map(
    (item, index) => {
      return (
        <FontColorBox
          id={item.id}
          abbr={item.abbr}
          color={item.color}
          label={item.label}
        />
      );
    }
  );

  return (
    <div className={styles.fontItem}>
      <div>{previewBoxes}</div>
      <div className={styles.fontPreview}></div>
    </div>
  );
};

export default connect(mapStoreToProps)(FontList);
