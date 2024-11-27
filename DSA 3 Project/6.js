let arr = [[5, 1, 2, 3], [4, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]

function Diagona(arr) {
        for (let a = 0; a < arr.length; a++) {
                let c = 0;
                for (let b = 0; b < arr[a].length; b++) {

                        if (a == b) {
                                arr[a][b] = 0;
                        }
                }
        }
        return arr
}


console.log(Diagona(arr));
