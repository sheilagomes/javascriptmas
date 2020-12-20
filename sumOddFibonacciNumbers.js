function sumOddFibonacciNumbers(num) {
    let num1 = 0;
    let num2 = 1;
    let num3 = num1 + num2;
    let sumNums = num3;
    while (num3 <= num) {
        if (num3 % 2 != 0) {
            sumNums += num3;
        }
        num1 = num2;
        num2 = num3;
        num3 = num1 + num2;
    }
    return sumNums;
}