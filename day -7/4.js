let arr = [1, 2, 3, 2, 4], target = 2;


console.log(last(arr, target));



function last(arr, target) {

        let i = 0;
        for (let a = 0; a < arr.length; a++) {

                if (arr[a] == target) {
                        i = a;
                }

        }

        if (i == 0) {
                return -1;
        }
        else {
                return i;
        }
}