## Vending machine task

The program should emulate the operation of the vending machine:
1. All data must be obtained from the input fields;
2. Algorithm: enter the banknote, enter the product number, then take your change and product
3. Machine features:
  1. take banknotes 50, 100, 200 or 500 RUB;
  2. give change in coins 10, 5, 2 and 1 RUB;
  3. validate data and show text, according entered data
  
## Banknote validation:
1. Error texts: 'Banknote must be a number!', 'Unknown banknote!';
2. Success text: 'Inserted money: ${currentInsertedMoney}';
3. If ${currentInsertedMoney} > max price of product - disable it input and show additional text line: 'Enough for any product!';

## Product number validation:
1. Error texts: 'Choice must be a number!', 'Enter the correct number!', 'Not enough money!';
2. Success text: 'Success!';

## Output result:
1. display change rows (Example: '10 R: 8 coins, 5 R: 1 coins')
2. display product;
