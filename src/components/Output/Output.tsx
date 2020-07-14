import React from 'react';

import styles from './Output.module.scss';
import { Item } from '../Item/Item';
import { ItemType } from '../../redux/items/types';
import { DisplayChange } from './DisplayChange';

interface Props {
    boughtItem: Partial<ItemType>,
    moneyChange: number | null,
    coins: number[],
    onClick?: () => void,
}

export const Output = ({
    boughtItem,
    moneyChange,
    coins,
    onClick,
}: Props) => {
    const isNotEmpty = Object.keys(boughtItem).length !== 0;
    const textStatus = isNotEmpty ? 'Take your product and change!' : '';

    return (
        <div className={styles.output}>
            <div className={styles.output__message}>
                {textStatus}
            </div>
            <div className={styles.output__footer}>
                <div className={styles.output__change}>
                    {isNotEmpty && <DisplayChange coins={coins} moneyChange={moneyChange} />}
                </div>
                <div className={styles.output__boughtProduct}>
                    {isNotEmpty && <Item item={boughtItem} onClick={onClick}/>}
                </div>
            </div>
        </div>
    )
}
