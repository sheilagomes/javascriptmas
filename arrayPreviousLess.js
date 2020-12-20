function arrayPreviousLess(nums) {
    const finalResult = [];
    for (let i = 0; i < nums.length; i++) {
        finalResult.push(-1);
    }
    for (let j = 0; j < nums.length; j--) {
        for (let k = j; k >= 0; k--) {
            if(nums[k] < nums[j]) {
                finalResult[j] = nums[k];
                break;
            }
        }
    }
    return finalResult;
}