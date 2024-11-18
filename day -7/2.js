let arr = [3, 7, 1, 5, 9, 0, 2]

let min = Infinity;
let max = -Infinity;


for (let a = 0; a < arr.length; a++) {
        if (arr[a] < min) {
                min = arr[a]
        }

        if (arr[a] > max) {
                max = arr[a]
        }
}

console.log(`Maximum : ${max}  ,  Minimum : ${min}`);

