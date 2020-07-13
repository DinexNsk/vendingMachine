import { Items } from "../redux/items/types";

export interface CoinChange {
    [key: string]: number,
}

export const makeCoinChangeObj = (coins: number[], moneyChange: number | null) => {
    let change: CoinChange = {};
    let total = 0;

    for (let i = coins.length; i >= 0; i--) {
        const coin = coins[i];
        while (total + coin <= Number(moneyChange)) {
            change[coin] = change[coin] + 1 || 1;
            total += coin;
        }
    }
    return change
};

export const findHighestPrice = (items: Items) => items.reduce((prev, current) => {
    return (prev > current.cost) ? prev : current.cost
  }, 0);

export const isNumber = (value: string | number): boolean => ((value !== '') && !isNaN(Number(value.toString())));