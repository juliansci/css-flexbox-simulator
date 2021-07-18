import React from 'react';
import Popup from 'reactjs-popup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './index.module.css';

const modalTriggerIcon = (
  <div className={styles.modalTriggerIcon}>
    <FontAwesomeIcon icon={faInfoCircle} />
  </div>
);

const FlexboxActionModal = ({ title, description }) => {
  return (
    <Popup trigger={modalTriggerIcon} modal>
      {(close) => (
        <div className={styles.container}>
          <div className={styles.actionClose} onClick={close}>
            {' '}
            <FontAwesomeIcon icon={faTimes} />{' '}
          </div>
          <div className={styles.header}>{title}</div>
          <div className={styles.content}>
            <div className={styles.globalDescription} dangerouslySetInnerHTML={{ __html: description.globalDescription }} />
            <div className={styles.values}>
              {description.valuesDescription.map((valueDescription, indexValue) => {
                return (
                  <div className={styles.value} key={indexValue}>
                    <div>{valueDescription.id}:</div>
                    <div dangerouslySetInnerHTML={{ __html: valueDescription.description }} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default FlexboxActionModal;
