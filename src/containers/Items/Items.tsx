import React from 'react';

import styles from './styles.module.scss';
import { Item } from '../../components/Item/Item';
import { useSelector } from 'react-redux';
import { selectors } from '../../redux/selectors';


export const Items = () => {
    const items = useSelector(selectors.items).data;

    return (
        <div className={styles.items}>
            <div className={styles.items__content}>
                {items && items.map(item => (
                    <Item key={item.productId} item={item} />
                ))}
            </div>
        </div>
    )
}
