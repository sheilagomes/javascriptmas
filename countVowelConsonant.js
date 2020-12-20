function countVowelConsonant(str) {
    let total = 0;
    str = str.split("");
    for(const letter of str) {
        if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u") {
            total += 1;
        } else {
            total += 2;
        }
    }
    return total
}