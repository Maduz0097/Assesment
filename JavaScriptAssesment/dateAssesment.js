Date.prototype.daysTo = function(d2)
{
    try{
        const date1 = new Date(
            this?.getFullYear(),
            this?.getMonth(),
            this?.getDate(),
            this?.getHours(),
            this?.getMinutes(),
            this?.getSeconds(),
            this?.getMilliseconds()
        );
        const date2 = new Date(
            d2?.getFullYear(),
            d2?.getMonth(),
            d2?.getDate(),
            d2?.getHours(),
            d2?.getMinutes(),
            d2?.getSeconds(),
            d2?.getMilliseconds());

        const timeDiff = date2?.getTime() - date1?.getTime();
        return Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    }catch (e) {
        console.log(e)
    }
};

const d1 = new Date('2023-06-01T20:30:00.000Z');
const d2 = new Date('2023-06-10T18:45:00.000Z');
console.log(d1.daysTo(d2)); // Output: 8
