import React from 'react';

import styles from './Item.module.scss';
import Checkmark from '../Checkmark/Checkmark';

import { ItemData } from '../../containers/types';

interface ItemProps {
    item: ItemData,
    moneyAmount: number,
}

export const Item = ({
    item,
    moneyAmount,
}: ItemProps) => {
    return (
        <div className={styles.item}>
            <div className={styles.item__withCheckmark}>
                <div>{item.companyName}</div>
                {moneyAmount >= item.cost && <Checkmark />}
            </div>
            <div className={styles.item__productName}>
                {item.productName}
            </div>
            <div className={styles.item__orderInfo}>
                <div className={styles.item__cost}>{`${item.cost} R`}</div>
                <div className={styles.item__productNumber}>{item.productId}</div>
            </div>
        </div>
    )
}
