function alphabetSubsequence(str) {
    const newStr = [];
    str.split('');
    const strUnique = new Set(str).size;
    const strSub = false;
    if (str.length == strUnique) {
        for (let i = 0; i < str.length-1; i++) {
            if (str.charCodeAt(i) < str.charCodeAt(i+1)) {
                strSub = true;
            } else {
                strSub = false;
            }
        }
        return strSub;
    } else {
        return false;
    }   
}