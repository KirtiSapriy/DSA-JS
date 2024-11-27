let arr = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]]

function ArrTsp(arr) {

        let Tarr = []

        for (let a = 0; a < arr.length; a++) {
                Tarr[a] = []
                for (let b = 0; b < arr[a].length; b++) {

                        Tarr[a][b] = arr[b][a]

                }
        }

        return Tarr
}

console.log(ArrTsp(arr));
