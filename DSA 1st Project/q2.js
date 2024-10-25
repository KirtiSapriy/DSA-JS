let arr = [
        [1, 2],
        [3, 4]
]

let a = []

for (let b = 0; b < arr.length; b++) {
        a[b] = []
        for (let c = 0; c < arr[b].length; c++) {
                a[b][c] = arr[c][b]
        }
}
console.log(a);

