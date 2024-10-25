let arr = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
]

let min = arr[0][0]

for (let a = 0; a < arr.length; a++) {
        for (let b = 0; b < arr[a].length; b++) {
                if (arr[a][b] > min) {
                        min = arr[a][b]
                }



        }
}
console.log(min);