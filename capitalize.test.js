import { capitalize } from "./capitalize.js"

test("capitalize first letter", () => {
    expect(capitalize("string")).toBe("String");
});

test("capitalize first letter and lower other letters", () => {
    expect(capitalize("stRIng")).toBe("String");
});