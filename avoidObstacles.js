function avoidObstacles(nums) {
    nums.sort();
    let possibleResult = nums[0]+1;
    for(let i =0; i < nums.length; i++) {
        if (nums[i+1] - nums[i] > 1) {
            possibleResult = nums[i]+1;
            if (!isPossibleResult(possibleResult, nums)) {
                return possibleResult;
            }
        }
    }
    return nums[nums.length+1];
}

function isPossibleResult(possibleResult, nums) {
    let finalResult = [];
    for(let j = 1; j < nums.length; j++) {
        finalResult.push(possibleResult * j);
    }
    return nums.includes(finalResult);
}