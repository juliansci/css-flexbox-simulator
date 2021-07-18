import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import FlexboxAction from '../FlexboxAction';
import FlexboxSimulator from '../FlexboxSimulator';
import styles from './index.module.css';

export const initialSimulatorData = {
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  alignContent: 'stretch',
};

const App = () => {
  const [itemsQuantity, setItemsQuantity] = useState(3);
  const [simulatorData, setSimulatorData] = useState(initialSimulatorData);

  const updateSimulatorData = async (toUpdate) => {
    setSimulatorData(toUpdate);
  };

  const removeItem = () => {
    if (itemsQuantity > 1) {
      setItemsQuantity(itemsQuantity - 1);
    }
  };

  const addItem = () => {
    if (itemsQuantity < 20) {
      setItemsQuantity(itemsQuantity + 1);
    }
  };

  return (
    <div className={styles.appLayout}>
      <div className={styles.headerLayout}>
        <Header />
      </div>
      <div className={styles.contentLayout}>
        <div className={styles.flexboxActionLayout}>
          <FlexboxAction updateValues={updateSimulatorData} simulatorData={simulatorData} removeItem={removeItem} addItem={addItem} />
        </div>
        <div className={styles.flexboxSimulatorLayout}>
          <FlexboxSimulator values={simulatorData} itemsQuantity={itemsQuantity} />
        </div>
      </div>
      <div className={styles.footerLayout}>
        <Footer />
      </div>
    </div>
  );
};

export default App;
