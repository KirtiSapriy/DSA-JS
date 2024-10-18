

let a = [1, 2, 3, 4, 5, 6]
let target = 5

function find() {


        for (let n = 0; n < a.length; n++) {
                if (a[n] == target) {
                        return n;
                }
        }

        return -1

}
 

let ans = find()

console.log(ans);
