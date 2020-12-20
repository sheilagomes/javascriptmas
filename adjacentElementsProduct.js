function adjacentElementsProduct(nums) {
    let largest = nums[0];
    for (let i = 0; i < (nums.length-1); i++) {
        product = nums[i]*nums[i+1];
        if (product > largest) {
            largest = product;
        }   
    }
    return largest;
}