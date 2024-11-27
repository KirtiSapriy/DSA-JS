let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]], target = 5, replecVal = 50;

function Replace(arr, target, replecVal) {

        for (let a = 0; a < arr.length; a++) {

                for (let b = 0; b < arr[a].length; b++) {

                        if (arr[a][b] == target) {
                                arr[a][b] = replecVal
                        }

                }
        }
        return arr

}

console.log(Replace(arr, target, replecVal));
