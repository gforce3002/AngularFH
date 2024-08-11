import {Product, taxCalculation} from './06-function-destructuring'

const shoppingCart : Product[] = [
    {
        descriptcion: 'Nokia',
        price: 100
    },
    {
        descriptcion: 'iPad',
        price: 150
    }
];

const [total, tax] = taxCalculation({tax:0.15, products: shoppingCart})


console.log(total, tax)