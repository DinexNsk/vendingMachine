import React from 'react';

import styles from './styles.module.scss';
import { Item } from '../../components/Item/Item';
import { ItemsData } from '../types';

interface ItemsProps {
    items: ItemsData,
    moneyAmount: number,
};

export const Items = ({
    items,
    moneyAmount,
}: ItemsProps) => {
    return (
        <div className={styles.items}>
            <div className={styles.items__content}>
                {items && items.map(item => (
                    <Item key={item.productId} item={item} moneyAmount={moneyAmount}/>
                ))}
            </div>
        </div>
    )
}
