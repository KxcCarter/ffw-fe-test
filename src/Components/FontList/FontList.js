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
        <div key={index} className={styles.listBox}>
          <div>
            <FontColorBox id={item.id} abbr={item.abbr} color={item.color} />
          </div>
          <div className={styles.label}>
            <ul>
              <li>{item.label}</li>
            </ul>
          </div>
        </div>
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
