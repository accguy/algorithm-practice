function solution(nums) {
    if(nums.length/2 > new Set(nums).size) return new Set(nums).size;
    return nums.length/2;
}