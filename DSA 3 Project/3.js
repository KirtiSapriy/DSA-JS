let arr = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]]

function ArrSum(arr) {
        let ar2 = []

        for (let a = 0; a < arr.length; a++) {
                let sum = 0;
                for (let b = 0; b < arr[a].length; b++) {
                        sum += arr[a][b]
                }
                ar2.push(sum)
        }

        return ar2
}

console.log(ArrSum(arr));
