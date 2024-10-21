let arr = [-3, -1, -4, 2, 0, -2, 5];


for (let a = 0; a < arr.length; a++) {

        let MinI = a;

        for (let b = a + 1; b < arr.length; b++) {

                if (arr[b] < arr[MinI]) {

                        MinI = b

                }

        }

        let tem = arr[MinI];
        arr[MinI] = arr[a];
        arr[a] = tem

}

console.log(arr);
