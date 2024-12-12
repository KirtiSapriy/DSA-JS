// Given an array, write a function to find the next greater element for each element in the array. If no such element exists, return -1. Example:
// Input: [4, 5, 2, 25]
// Output: [5, 25, 25, -1] 


let array = [4, 5, 2, 25]
function NextGreater(array) {

        let arr = new Array(array.length).fill(-1)
        let stack = []

        for (let a = 0; a < array.length; a++) {

                while (stack.length > 0 && array[stack[stack.length - 1]] < array[a]) {
                        arr[stack[stack.length - 1]] = array[a]
                        stack.pop()
                }

                stack.push(a)
        }

        return arr


}

console.log((NextGreater(array)));