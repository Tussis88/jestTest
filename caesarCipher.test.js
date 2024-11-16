import { caesarCipher } from "./caesarCipher";

test("simple", () => {
    expect(caesarCipher("abc", 2)).toBe("cde");
});

test("end", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("case preservation", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("punctuation", () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test("wrong number", () => {
    expect(() => caesarCipher("xyz", 8)).toThrow();
})
