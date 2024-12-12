// Implement the binary search algorithm to find an element in a sorted array. Explain both recursive and iterative approaches with examples. Example:
// Input: Array: [1, 3, 5, 7, 9, 11], Target: 7
// Output: Found at index 3. 


let arr = [1, 3, 5, 7, 9, 11], Target = 7, l = 0, r = arr.length - 1
function findTarget(arr, Target, l, r) {

        let mid = Math.floor((l + r) / 2)

        if (arr[mid] == Target) {

                return mid
        }

        if (arr[mid] > Target) {
                return findTarget(arr, Target, l, mid - 1)
        }
        if (arr[mid] < Target) {
                return findTarget(arr, Target, mid + 1, r)

        }

}

console.log(`Found at index ${findTarget(arr, Target, l, r)} .`);
