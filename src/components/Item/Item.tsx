import React from 'react';

import styles from './Item.module.scss';
import Checkmark from '../Checkmark/Checkmark';

import { useSelector } from 'react-redux';
import { selectors } from '../../redux/selectors';
import { ItemType } from '../../redux/items/types';

interface ItemProps {
    item: Partial<ItemType>,
    onClick?: () => void,
}

export const Item = ({
    item,
    onClick,
}: ItemProps) => {
    const moneyAmount = useSelector(selectors.currentOperation).moneyAmount;
    
    return (
        <div className={styles.item} onClick={onClick}>
            <div className={styles.item__withCheckmark}>
                <div>{item.companyName}</div>
                {moneyAmount >= Number(item.cost) && <Checkmark />}
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
