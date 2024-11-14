import { calculator } from "./calculator.js";

const calc = calculator();

test("add, correct", () => {
    expect(calc.add(2, 1)).toBe(3);
});

// to catch errors you need to wrap the tested function in another function
test("add, error", () => {
    expect(() => calc.add(2, "a")).toThrow();
});