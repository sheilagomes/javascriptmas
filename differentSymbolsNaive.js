function differentSymbolsNaive(str) {
    let strNew = str.split('');
    strNew.sort();
    let finalResult = [strNew[0]];
    for (let i = 0; i < str.length-1; i++) {
        if (strNew[i] != strNew[i+1]) {
            finalResult.push(strNew[i+1]);
        }
    }
    return finalResult.length;
}