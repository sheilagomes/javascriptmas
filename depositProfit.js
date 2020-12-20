function depositProfit(deposit, rate, threshold) {
    let years = 0;
    while (deposit < threshold) {
        deposit *= (rate/100)+1;
        years++;
    }
    return years;
}