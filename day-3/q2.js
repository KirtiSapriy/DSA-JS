let arr = [53, 2, 12, 54, 4, 5, 6,-3];


for (let a = 0; a < arr.length - 1; a++) {

        for (let b = 0; b < arr.length - a; b++) {
                if (arr[b] > arr[b + 1]) {
                        let tem = arr[b];
                        arr[b] = arr[b + 1];
                        arr[b + 1] = tem

                }
        }
}


console.log(arr);
