let arr = [0, 0, 3, 0, 1, 0, 2, 0, 0, 4];

for (let a = 0; a < arr.length - 1; a++) {

        let mInI = a;
        for (let b = a + 1; b < arr.length; b++) {

                if (arr[b] < arr[mInI]) {
                        mInI = b
                }

        }

        let tem = arr[mInI];
        arr[mInI] = arr[a]
        arr[a] = tem

}

console.log(arr);