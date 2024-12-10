// Q3 : Row Sum
let arr = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12]
]


function SumofRow(arr) {

        for (let a = 0; a < arr.length; a++) {
                let RowSum = 0
                for (let b = 0; b < arr[a].length; b++) {
                        RowSum += arr[a][b]
                }
                console.log(RowSum);


        }
}

SumofRow(arr)
