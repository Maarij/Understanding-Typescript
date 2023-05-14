type Combinable = number | string;
type ConversionDescription = 'as-number' | 'as-text'

function combine(i1: Combinable,
                 i2: Combinable,
                 resultConversion: ConversionDescription) {
    let result;
    if (typeof i1 === 'number' && typeof i2 === 'number' || resultConversion === 'as-number') {
        result = +i1 + +i2;
    } else {
        result = i1.toString() + i2.toString();
    }

    return result;
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedAgesString = combine('30', '26', 'as-number');
console.log(combinedAges);

const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);