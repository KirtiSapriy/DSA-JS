// Given an array that has been , write a program to find the index of a target value using a modified binary search algorithm. If the target is not found, return -1.Example:
// Input: Array = [4, 5, 6, 7, 0, 1, 2], Target = 0
// Output: 4
// Input: Array = [4, 5, 6, 7, 0, 1, 2], Target = 3
// Output: -1

let array = [4, 5, 6, 7, 0, 1, 2]
let Target = 0
let Target1 = 3


function findeTaarget(array, target) {

        let l = 0, r = array.length - 1;
        while (l <= r) {
                let mid = Math.floor((l + r) / 2);

                if (target == array[mid]) {
                        return mid
                }

                if (array[l] <= array[mid]) {
                        if (target >= array[l] && target < array[mid]) {
                                r = mid - 1
                        }
                        else {
                                l = mid + 1
                        }
                }
                else {
                        if (target > array[mid] && target <= array[r]) {
                                r = mid - 1
                        }
                        else {
                                l = mid + 1
                        }
                }

        }

        return -1;
}

console.log(findeTaarget(array, Target));
console.log(findeTaarget(array, Target1));

