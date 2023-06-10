const salesArray = [
    {amount: 10000, quantity: 10},
    {amount: 50000, quantity: 10},
    {amount: 250000, quantity: 10},
    {amount: 4888000, quantity: 10},
    {amount: 500, quantity: 10},
]

const orderByTotal = (salesArray) => {
    const modifiedSales = salesArray?.map(sale => ({
        ...sale,
        Total: sale?.amount * sale?.quantity
    }));
    return modifiedSales?.sort((a,b) => a?.Total - b?.Total)
}

console.log(orderByTotal(salesArray))