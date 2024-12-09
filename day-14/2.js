let arr = [0, 1, 2, 3, 0, 5, 7, 0, 9];

console.log(MoveZero(arr));


function MoveZero(arr) {

        for (let a = 0; a < arr.length; a++) {
                for (let b = a + 1; b < arr.length; b++) {
                        if (arr[a] == 0) {
                                tem = arr[a]
                                arr[a] = arr[b]
                                arr[b] = tem
                        }
                }
        }
        return arr
}
