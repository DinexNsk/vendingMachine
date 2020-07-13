import React, { useMemo } from 'react';

import { makeCoinChangeObj } from '../../utils/utils';

interface Props {
    coins: number[],
    moneyChange: number | null,
}

export const DisplayChange = ({
    coins,
    moneyChange
}: Props) => {
    const changeResult = useMemo(() => makeCoinChangeObj(coins, moneyChange), [coins, moneyChange]);
    const arrayOfKeysByDescendingOrder = useMemo(
        () => Object.keys(changeResult).sort((a, b) => Number(b) - Number(a)),
    [changeResult]);

    return (
        <>
            {moneyChange
                ? arrayOfKeysByDescendingOrder.map(coin =>(
                    <div key={`changeId-${coin}`} style={{ marginBottom: 10 }}>
                        {`${coin} R: ${changeResult[coin]} coins`}
                    </div>)) 
                : 'No change!'
            }
        </>
    )
}
