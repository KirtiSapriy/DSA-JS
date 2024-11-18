let arr = [0, 1, 0, 3, 12];



for (let a = 0; a < arr.length; a++) {
        for (let b = a + 1; b < arr.length; b++) {
                if (arr[a] == 0) {
                        let tem = arr[a];
                        arr[a] = arr[b];
                        arr[b] = tem
                }
        }
}

console.log(arr);
