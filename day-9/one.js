let arr = [1, 2, 3, 4, 6]

for (let a = 0; a < arr.length; a++) {

        let sa = []
        for (let b = a; b < arr.length; b++) {

                sa.push(arr[b])
                console.log(sa);

        }


}