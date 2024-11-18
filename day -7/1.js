
let arr = [10, 20, 30, 40, 50]

let target = 30;

console.log(FindIndex(arr, target));


function FindIndex(arr, target) {

        for (let a = 0; a < arr.length; a++) {
                if (arr[a] == target) {
                        return a;
                }
        }
}