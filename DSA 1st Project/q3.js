let arr = [
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9]
];
let Target = 6;

let result = false

for (let a = 0; a < arr.length; a++) {

        for (let b = 0; b < arr[a].length; b++) {
                if (arr[a][b] == Target) {
                        result = true
                }
        }
}

console.log(result);
