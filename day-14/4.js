let arr = [1, 2, 5, 7, 8, 9]


function Squares(arr) {

        for (let a = 0; a < arr.length; a++) {
                arr[a] = arr[a] * arr[a]

        }

        return sort(arr)

}
function sort(arr) {

        for (let a = 0; a < arr.length - 1; a++) {
                let minI = a;
                for (let b = a + 1; b < arr.length; b++) {
                        if (arr[minI] > arr[b]) {
                                minI = b
                        }
                }
                let tem = arr[minI]
                arr[minI] = arr[a]
                arr[a] = tem
        }

        return arr

}

console.log(Squares(arr));
