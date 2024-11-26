let arr = [1, 1, 1]
let target = 2;
let count = 0;

for (let a = 0; a < arr.length; a++) {
        let sum = 0;
        for (let b = a; b < arr.length; b++) {
                sum += arr[b]
                if (sum == target) {
                        count++
                }
        }
}

console.log(count);
