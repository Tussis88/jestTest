const capitalize = require("./capitalize")

test("capitalize first letter", () => {
    expect(capitalize("string")).toBe("String");
});