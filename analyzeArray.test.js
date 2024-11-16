import { analyzeArray } from "./analyzeArray";

test("simple", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toMatchObject({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});

test("error", () => {
    expect(() => analyzeArray([1, "a", 3, 4, 2, 6])).toThrow();
});