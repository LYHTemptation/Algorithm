/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    let result = 0;
    nums.forEach(value=>{
        if(nums[nums.length-1]<target){
            result = nums.indexOf(nums[nums.length-1])+1;
        }else if(value<target){
            result = nums.indexOf(value)+1;
        }
    })
    console.log(result);
    return result
};

searchInsert([1,3,5,6],5)