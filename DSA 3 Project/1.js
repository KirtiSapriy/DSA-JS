function Sorting(arr) {

        for (let a = 0; a < arr.length - 1; a++) {
                let MinI = a;

                for (let b = a + 1; b < arr.length ; b++) {
                        if (arr[MinI] > arr[b]) {
                                MinI = b
                        }
                }
                let temp = arr[MinI]
                arr[MinI] = arr[a];
                arr[a] = temp

        }

        return arr;
}


console.log(Sorting([29, 10, 14, 37, 13]));
