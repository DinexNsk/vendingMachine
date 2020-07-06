import React, { useState } from 'react';
import styles from './App.module.scss';
import { Items } from '../Items/Items';
import { OrderBlock } from '../OrderBlock/OrderBlock';

import { ItemsData } from '../types';

const items: ItemsData = [
  {
      companyName: 'Cola',
      productName: 'Cold Drink',
      cost: 135,
      productId: 1
  },
  {
      companyName: 'Ashot',
      productName: 'Shaurma',
      cost: 900,
      productId: 2
  },
  {
      companyName: '5ka',
      productName: 'Bread',
      cost: 20,
      productId: 3
  },
  {
      companyName: 'Papa Johs',
      productName: 'Pizza',
      cost: 600,
      productId: 4
  },

];

const ids = items.map(el => el.productId);

const maxCost = items.reduce((prev, current) => {
  return (prev > current.cost) ? prev : current.cost
}, 0);

function App() {
  const [moneyAmount, setMoneyAmount] = useState(0);

  return (
    <div className={styles.app}>
      <Items items={items} moneyAmount={moneyAmount} />
      <OrderBlock
        items={items}
        ids={ids}
        moneyAmount={moneyAmount}
        setMoneyAmount={setMoneyAmount}
        maxCost={maxCost}
      />
    </div>
  );
}

export default App;
