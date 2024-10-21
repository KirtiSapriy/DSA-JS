let arr = [9, 7, 3, 8, 1, 5, 2];

for (let a = 0; a < arr.length - 1; a++) {
        // console.log(a);

        let min = a;

        for (let b = a + 1; b < arr.length; b++) {

                if (arr[b] < arr[min]) {
                        min = b
                }

        }

        let tem = arr[min]
        arr[min] = arr[a];
        arr[a] = tem



}

console.log(arr);
