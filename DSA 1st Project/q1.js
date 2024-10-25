let arr = [
        [2, 3, 4],
        [5, 6, 7],
        [8, 9, 1]
]
let a, b
let sum = 0

for (a = 0, b = 0; a < arr.length; a++, b++) {
        sum += arr[a][b]
}

console.log(sum);
