import { calculator } from "./calculator.js";

const calc = calculator();

test("add, correct", () => {
    expect(calc.add(2, 1)).toBe(3);
});

// to catch errors you need to wrap the tested function in another function
test("add, error", () => {
    expect(() => calc.add(2, "a")).toThrow();
});

test("subtract, correct", () => {
    expect(calc.subtract(2, 1)).toBe(1);
});

test("subtract, error", () => {
    expect(() => calc.subtract(2, "a")).toThrow();
});


test("multiply, correct", () => {
    expect(calc.multiply(4, 5)).toBe(20);
});

test("multiply, error", () => {
    expect(() => calc.multiply(2, "a")).toThrow();
});

test("divide, correct", () => {
    expect(calc.divide(4, 2)).toBe(2);
});

test("divide, not integer", () => {
    expect(calc.divide(5, 2)).toBe(2.5);
});

test("divide, error", () => {
    expect(() => calc.divide(2, "a")).toThrow();
});

test("divide, by 0", () => {
    expect(() => calc.divide(2, 0)).toThrow();
});
