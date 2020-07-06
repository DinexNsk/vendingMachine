import React, { useState, useEffect, useCallback } from 'react';

import styles from './styles.module.scss';
import { Form } from '../../components/Form/Form';
import { Output } from '../../components/Output/Output';
import { ItemsData, ItemData } from '../types';

const banknotes: number[] = [50, 100, 200, 500, 1000];

interface OrderBlockProps {
    items: ItemsData,
    ids: number[],
    moneyAmount: number;
    setMoneyAmount: React.Dispatch<React.SetStateAction<number>>,
    maxCost: number,
}

export const OrderBlock = ({
    items,
    ids,
    moneyAmount,
    setMoneyAmount,
    maxCost,
}: OrderBlockProps) => {
    const [moneyFormLabel, setMoneyFormLabel] = useState('Insert banknotes...');
    const [selectedProductlabel, setSelectedProductlabel] = useState('.');
    const [chosenItem, setChosenItem] = useState<ItemData | undefined>(undefined);

    useEffect(() => {
        if (moneyAmount > 0) {
            setSelectedProductlabel('Choose product...')
        };
    }, [moneyAmount]);

    const validateSubmitMoney = useCallback((value) => {
        if (isNaN(value)) {
            return setMoneyFormLabel('Banknote must be a number!');
        };
        if (!banknotes.includes(Number(value))) {
           return setMoneyFormLabel('Unknown banknote!')
        };

        const moneySum = moneyAmount + Number(value);
        setMoneyAmount(moneySum);
        setMoneyFormLabel(`Inserted money: ${moneySum}`);
        return;
    }, [moneyAmount, setMoneyAmount]);


    const validateSubmitProductNumber = useCallback((value) => {
        if (isNaN(value)) {
            return setSelectedProductlabel('Choice must be a number!');
        };
        if (!ids.includes(Number(value))) {
            return setSelectedProductlabel('Enter the correct number!');
        };
        const element = items.find(el => el.productId === Number(value));
    
        if (!element) {
            return setSelectedProductlabel('Enter the correct number!');
        };
        if (element.cost > moneyAmount) {
            return setSelectedProductlabel('Not enough money!');
        };

        setSelectedProductlabel('Success!');
        setChosenItem(element);
        return;
    }, [ids, items, moneyAmount])

    const onSubmitMoney = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter') {
            const value = (event.target as HTMLInputElement).value;
            validateSubmitMoney(value);
        }
    }, [validateSubmitMoney]);


    const onSubmitProductNumber = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter') {
            const value = (event.target as HTMLInputElement).value;
            validateSubmitProductNumber(value);
        }
    }, [validateSubmitProductNumber]);

    const moneyChange = chosenItem ? (moneyAmount - chosenItem.cost) : null;

    return (
        <div className={styles.orderBlock}>
            <Form 
                bonusText='Available banknotes: 50, 100, 200, 500 or 1000 R. The machine gives change in 1, 2, 5 and 10 R coins.'
                onSubmit={onSubmitMoney}
                labelText={moneyFormLabel}
                disabled={moneyAmount >= maxCost}
                additionalLabelText = {moneyAmount >= maxCost && 'Enough for any product!'}
            />
            <Form 
                onSubmit={onSubmitProductNumber}
                labelText={selectedProductlabel}
                disabled={moneyAmount === 0}
            />

            <Output
                boughtItem={chosenItem}
                moneyChange={moneyChange}
                coins={[1, 2, 5, 10]}
            />
        </div>
    )
}
