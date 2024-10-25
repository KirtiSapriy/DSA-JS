let arr = [53, 2, 12, 54, 4, 5, 6];

// let arr = [1, 2, 3, 4, 5, 6, 7]


for (let a = 0; a < arr.length - 1; a++) {
        let f = false

        for (let b = 0; b < arr.length - a; b++) {
                if (arr[b] > arr[b + 1]) {
                        let tem = arr[b];
                        arr[b] = arr[b + 1]
                        arr[b + 1] = tem;

                        f = true
                }
        }
        if (f == false) {

                break;
        }

}

console.log(arr);
