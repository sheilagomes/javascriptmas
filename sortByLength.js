function sortByLength(strs) {
    let newStrs = [];
    for (let i = 0; i < strs.length; i++) {
        newStrs[i] = strs[i].length;
    }
    newStrs.sort();
    
    finalStrs = [];
    
    while (newStrs.length > 0) {
        for (let i = 0; i < strs.length; i++) {
            if (strs[i].length == newStrs[0]) {
	        finalStrs.push(strs[i])
	        newStrs.shift();
	    }
        }
    }
    return finalStrs;
}