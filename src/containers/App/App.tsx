import React from 'react';
import styles from './App.module.scss';
import { Items } from '../Items/Items';
import { OrderBlock } from '../OrderBlock/OrderBlock';


function App() {

  return (
    <div className={styles.app}>
      <Items />
      <OrderBlock />
    </div>
  );
}

export default App;
