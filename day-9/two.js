let arr = [1, 2, 3, 4, 6]
let max = -Infinity;

for (let a = 0; a < arr.length; a++) {
        let sum = 0;

        for (let b = a; b < arr.length; b++) {
                sum += arr[b]
                if (sum > max) {
                        max = sum;
                }
        }

}

console.log(max);
