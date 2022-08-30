// // 'use strict';

// let x = this

// console.log(x)

// function myFunc () {
//     return this
// }

// console.log()

// console.log(myFunc())

// Finding subarray
var numberOfArithmeticSlices = function(nums) {
    if(nums.length<=2){
        return 0;
    }   
   
   let final_c=0;
   let c_a =0;
   let l_a = 0;
   for(let i=1; i<nums.length-1; i++)
   {
       if((nums[i]-nums[i-1])==(nums[i+1]-nums[i]))
       {
           l_a++;
           c_a +=l_a;
       }
       else
       {
           final_c +=c_a;
           l_a =0;
           c_a =0;
       }
   }
   final_c +=c_a;
   
   
   return final_c;
}

// Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

 

// Example 1:

// Input: nums = [3,2,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2.
// The third distinct maximum is 1.

var thirdMax = function(nums) {
    nums.sort((a, b) => ( b - a))
    if(nums[2] != null || nums[2] != 'undefined'){
        return nums[2]
    }
    else {
        return nums[0]
    }
};