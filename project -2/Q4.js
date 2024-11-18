let arr = [7, 4, 3, 5, 6, 2]



for (let a = 0; a < arr.length - 1; a++) {

        let minI = a;

        for (let b = a + 1; b < arr.length; b++) {
                if (arr[b] < arr[a]) {
                        minI = b
                }
        }
        let tem = arr[minI];
        arr[minI] = arr[a];
        arr[a] = tem;


}

console.log(arr);
