let arr = [5, 6, 8, 7, 4, 6, 3, 9, 2, 1]



for (let a = 0; a < arr.length - 1; a++) {
        let minI = a

        for (let b = a + 1; b < arr.length; b++) {
                if (arr[minI] > arr[b]) {
                        minI = b
                }
        }
        console.log(minI);
        let tem = arr[minI];
        arr[minI] = arr[a]
        arr[a] = tem

}
console.log(arr);
