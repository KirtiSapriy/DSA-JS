

let arr = [1, 2, 3, 4, 6], target = 6;


let l = 0;
let r = arr.length - 1;


function sum() {

        while (l <= r) {

                if ((arr[l] + arr[r]) > target) {
                        r--
                }
                if ((arr[l] + arr[r]) < target) {
                        l++
                }

                if ((arr[l] + arr[r]) == target) {
                        return [l, r]
                }


        }
        return [-1, -1]
}

console.log(sum());
