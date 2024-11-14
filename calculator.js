function calculator() {
    const numCheck = (number) => {
        if (isNaN(number)) throw new Error(`${number} is not a number`);

    }

    const add = (x, y) => {
        numCheck(x);
        numCheck(y);
        return x + y;
    };

    const subtract = (x, y) => {
        numCheck(x);
        numCheck(y);
        return x - y;
    };

    const multiply = (x, y) => {
        numCheck(x);
        numCheck(y);
        return x * y;
    };

    const divide = (x, y) => {
        numCheck(x);
        numCheck(y);
        return x / y;
    };

    return { add, subtract, multiply, divide };
}

export { calculator };