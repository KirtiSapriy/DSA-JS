// Pair Sum in a Sorted Array
// Given a sorted array and a target sum, find two numbers in the array whose sum equals the target. Return the indices of the two numbers.

// Example:
// Input: [1, 2, 3, 4, 6], target: 6
// Output: [1, 3] (Since 2 + 4 = 6)

let arr = [1, 2, 3, 4, 6], target = 6;


function pair() {
        let l = 0;
        let r = arr.length - 1;

        while (l <= r) {
                sum = arr[l] + arr[r]
                if (sum == target) {
                        return [l, r]
                }
                else if (sum > target) {
                        r--
                }
                else if (sum < target) {
                        l++
                }

        }
}

console.log(pair());