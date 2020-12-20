function arrayMaximalAdjacentDifference(nums) {
    let newNums = [];
    for (let i = 0; i < nums.length-1; i++) {
        newNums.push(Math.abs(nums[i + 1] - nums[i]));
    }
    return newNums.sort()[newNums.length-1];
}