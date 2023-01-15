'use strict';

function calcAge1(birthday) {
    const date = new Date();
    const convertMyDate = new Date(Date.parse(birthday));
    const convertToMilSeconds = date.getTime() - convertMyDate.getTime();
    const convertToYears = convertToMilSeconds / 1000 / 60 / 60 / 24 / 365;
    const getMonth = convertToYears % 1;
    const roundYear = Math.floor(convertToYears)
    const roundMonth = Math.floor(getMonth * 12)

    return {
        years : roundYear,
        months : roundMonth
    }

}

const age1 = calcAge1("1995-04-13");
console.log(`tienes ${age1.years} años y ${age1.months} meses`);
