function extractEachKth(nums, index) {
    return nums.filter(nums => nums % index != 0);
}