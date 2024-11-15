function caesarCipher(string, shiftNumber) {
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
        newChar = charShifter(newChar, -25);
    }
    return newChar;
}

function isLetter(char) {
    return char.toLowerCase() != char.toUpperCase();
}

export { caesarCipher }