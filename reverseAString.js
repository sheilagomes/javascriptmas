function reverseAString(str) {
    return str.split('').reverse().join().replace(/,/g, "");
}