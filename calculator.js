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
        if (y === 0) throw new Error("you can't divide by 0");
        numCheck(x);
        numCheck(y);
        return x / y;
    };

    return { add, subtract, multiply, divide };
}

export { calculator };