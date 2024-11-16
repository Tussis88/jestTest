function caesarCipher(string, shiftNumber) {
    if (shiftNumber > 6 || shiftNumber < 1) throw new Error("shift number must be between  0 and 7");
    let newString = "";
    for (let i = 0; i < string.length; i++) {
        let newChar = string[i];
        if (isLetter(newChar)) {
            newChar = charShifter(newChar, shiftNumber);
        };
        newString += newChar;
    };
    return newString;
}

function charShifter(charToShift, shiftingValue) {
    let newChar = String.fromCharCode(charToShift.charCodeAt(0) + shiftingValue);
    if (!isLetter(newChar)) {
        newChar = charShifter(newChar, -26);
    }
    return newChar;
}

function isLetter(char) {
    return char.toLowerCase() != char.toUpperCase();
}

export { caesarCipher }