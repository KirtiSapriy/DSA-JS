// Write a program to check if there exist two numbers in a sorted array whose sum equals a given target using the two-pointer technique. Example:
// Input: Array: [1, 2, 3, 4, 5, 6], Target: 9
// Output: true (Numbers: 3 and 6). 


let array = [1, 2, 3, 4, 5, 6], Target = 9;

function findTarget(array, Target) {
        let l = 0, r = array.length - 1;

        while (l <= r) {
                let sum = array[l] + array[r]

                if (sum == Target) {
                        return [array[l], array[r]]
                }
                else if (sum < Target) {
                        l++

                }
                else if (sum > Target) {
                        r--
                }

        }
        return [-1, -1]
}

console.log(findTarget(array, Target));

