export interface Product
{
    descriptcion: string;
    price: number;
}

interface TaxCalculationOptions{
    tax: number;
    products: Product[];
}

const phone: Product = {
    descriptcion: "Nokia A1",
    price: 150.0
}

const tablet: Product = {
    descriptcion: "iPad air",
    price: 250.0
}


export function taxCalculation( options: TaxCalculationOptions): [number, number]{
    const {tax, products} = options;
    let total = 0;
    products.forEach(({price}) =>{
        total += price;
    })
    return [total, total * tax]
}

/* const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total, Tax1] = taxCalculation({tax: tax, products: shoppingCart})
 */
/* console.log(total, Tax1) */



