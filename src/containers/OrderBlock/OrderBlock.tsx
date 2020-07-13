import React, { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Form } from '../../components/Form/Form';
import { Output } from '../../components/Output/Output';
import { selectors } from '../../redux/selectors';
import { setMoneyAmount, setSelectedItem, setChange } from '../../redux/currentOperation/actions';
import { findHighestPrice, isNumber } from '../../utils/utils';
import { banknotes, coins } from '../../utils/data';

import styles from './styles.module.scss';


export const OrderBlock = () => {
    const items = useSelector(selectors.items).data;
    const {
        moneyAmount,
        selectedItem,
        changeAmount,
    } = useSelector(selectors.currentOperation);
    const dispatch = useDispatch();

    const [moneyFormLabel, setMoneyFormLabel] = useState('');
    const [selectedProductlabel, setSelectedProductlabel] = useState('');

    const maxCost = useMemo(() => findHighestPrice(items), [items]);

    const validateSubmitMoney = (value: string | number) => {
        if (!isNumber(value)) {
            setMoneyFormLabel('Banknote must be a number!');
        } else if (!banknotes.includes(Number(value))) {
            setMoneyFormLabel('Unknown banknote!')
        } else {
            const moneySum = moneyAmount + Number(value);

            dispatch(setMoneyAmount(moneySum));
            setMoneyFormLabel(`Inserted money: ${moneySum}`);
            setSelectedProductlabel('Choose product...')
        }
    };


    const validateSubmitProductNumber = (value: string | number) => {
        if (!isNumber(value)) {
            return setSelectedProductlabel('Choice must be a number!');
        };
        const element = items.find(el => el.productId === Number(value));
    
        if (!element) {
            return setSelectedProductlabel('Enter the correct number!');
        };
        if (element.cost > moneyAmount) {
            return setSelectedProductlabel('Not enough money!');
        };

        setSelectedProductlabel('Success!');
        dispatch(setSelectedItem(element));
        dispatch(setChange(moneyAmount - Number(element.cost)));
        return;
    };

    const onSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter') {
            const value = (event.target as HTMLInputElement).value;
            const name = (event.target as HTMLInputElement).name;

            name === 'money' ? validateSubmitMoney(value) : validateSubmitProductNumber(value);
        }
    };

    return (
        <div className={styles.orderBlock}>
            <Form 
                bonusText='Available banknotes: 50, 100, 200, 500 or 1000 R. The machine gives change in 1, 2, 5 and 10 R coins.'
                onSubmit={onSubmit}
                labelText={moneyFormLabel}
                disabled={moneyAmount >= maxCost}
                additionalLabelText = {moneyAmount >= maxCost && 'Enough for any product!'}
                name='money'
                defaultLabel='Insert banknotes...'
            />
            <Form 
                onSubmit={onSubmit}
                labelText={selectedProductlabel}
                disabled={moneyAmount === 0}
                name='productNumber'
                defaultLabel='.'
            />

            <Output
                boughtItem={selectedItem}
                moneyChange={changeAmount}
                coins={coins}
            />
        </div>
    )
}
