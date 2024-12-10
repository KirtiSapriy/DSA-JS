// Q12:- Find the Next Greater Element of array .
let array = [4, 5, 2, 25]

function NextGreater(array) {

        let arr = new Array(array.length).fill(-1)
        let stack = []

        for (let a = 0; a < array.length; a++) {

                while (stack.length > 0 || array[stack[stack.length - 1]] < array[a]) {

                        arr[stack[stack.length - 1]] = array[a]

                        stack.pop()
                }

                stack.push(a)

        }

        return arr

}

console.log(NextGreater(array));
