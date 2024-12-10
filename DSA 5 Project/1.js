// Q1: Find Maximum Element

let arr = [12, 3, 45, 7, 23, 9]

function FindMaximum(arr) {

        let max = -Infinity;


        for (let a = 0; a < arr.length; a++) {
                if (arr[a] > max) {
                        max = arr[a]
                }

        }

        return max
}

console.log(FindMaximum(arr));
