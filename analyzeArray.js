function analyzeArray(array) {
    let minValue = 999999;
    let maxValue = 0;
    array.forEach(element => {
        if (isNaN(element)) throw new Error(`${element} is not a number`);
        if (minValue > element) minValue = element;
        if (maxValue < element) maxValue = element;
    });
    const averageValue = array.reduce((a, b) => a + b) / array.length;

    return {
        average: averageValue,
        min: minValue,
        max: maxValue,
        length: array.length
    };
}

export { analyzeArray }