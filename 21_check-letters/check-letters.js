export const checkLetters = (arrOfStrings) => {
    const text = arrOfStrings[0].toLowerCase();
    const str = arrOfStrings[1].toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (text.indexOf(str[i]) === -1) {
            return false;
        }
    }
    return true;
}
