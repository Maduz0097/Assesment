const salesArray = [
    {amount: 10000, quantity: 10},
    {amount: 50000, quantity: 10},
    {amount: 250000, quantity: 10},
    {amount: 4888000, quantity: 10},
    {amount: 500, quantity: 10},
]

const quickSort = (arr) => {
    if (Array.isArray(arr)){
        if (arr?.length <= 1) {
            return arr;
        }
        const pivot = arr[Math.floor(arr?.length / 2)];
        const left = [];
        const equal = [];
        const right = [];

        for (let element of arr) {
            if (element?.Total < pivot?.Total) {
                left?.push(element);
            } else if (element?.Total > pivot?.Total) {
                right?.push(element);
            } else {
                equal.push(element);
            }
        }
        return [...quickSort(left), ...equal, ...quickSort(right)];
    }else {
        return []
    }

}
const orderByTotal = (salesArray) => {
    const modifiedSales = salesArray?.map(sale => ({
        ...sale,
        Total: sale?.amount * sale?.quantity
    }));
    return quickSort(modifiedSales)
}

console.log(orderByTotal(salesArray))