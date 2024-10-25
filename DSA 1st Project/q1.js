let arr = [
        [2, 3, 4],
        [5, 6, 7],
        [8, 9, 1]
]

let sum = 0

for (let a = 0; a < arr.length; a++) {

        for (let b = 0; b < arr[a].length; b++) {
                if (a == b) {
                        sum += arr[a][b]
                }
        }

}

console.log(sum);
