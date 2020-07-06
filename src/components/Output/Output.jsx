import React from 'react';

import styles from './Output.module.scss';
import { Item } from '../Item/Item';

export const Output = ({
    boughtItem,
    moneyChange,
    coins,
}) => {

    const minCoinChange = (coins, amount) => {
        let change = {};
        let total = 0;

        for (let i = coins.length; i >= 0; i--) {
            const coin = coins[i];
            while (total + coin <= amount) {
                change[coin] = change[coin] + 1 || 1;
                total += coin;
            }
        }
        return change
    };

    const textStatus = boughtItem ? 'Take your product and change!' : '';
    const changeResult = minCoinChange(coins, moneyChange);

    const displayChange = boughtItem ? (moneyChange ? Object.keys(changeResult).sort((a, b) => +b - +a).map(el => 
    <div key={`changeId-${el}`} style={{ marginBottom: 10}}>
        {`${el} R: ${changeResult[el]} coins`}
    </div>) : 'No change!') : '';
    return (
        <div className={styles.output}>
            <div className={styles.output__message}>
                {textStatus}
            </div>
            <div className={styles.output__footer}>
                <div className={styles.output__change}> 
                    {displayChange}
                </div>
                <div className={styles.output__boughtProduct}>
                    {boughtItem && <Item item={boughtItem} />}
                </div>
            </div>
        </div>
    )
}
