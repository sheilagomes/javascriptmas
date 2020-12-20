function insertDashes(arr) {
    let finalString = [];
    let stringItems = arr.split(' ');
    if (stringItems.length > 1) {
        for (let i = 0; i < stringItems.length; i++) {
            finalString.push(stringItems[i].split('').join('-'));
        }
        return finalString.join(' ');
    } else {
        return arr.split('').join('-');
    }
}