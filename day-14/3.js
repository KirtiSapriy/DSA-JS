let arr = [10, 11, 11, 12, 14, 16, 17, 17]


function RemoveDuplicates(arr) {

        let a = 0;
        for (let b = 0; b < arr.length; b++) {

                if (arr[a] != arr[b]) {
                        a++
                        arr[a] = arr[b]
                }

        }

        return a

}

console.log(RemoveDuplicates(arr));
