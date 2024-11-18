
let arr = [1, 2, 3, 4, 5]


let min = Infinity;
let max = -Infinity;
let maxsum = 0
let minsum = 0
for (let a = 0; a < arr.length; a++) {
        if (arr[a] > max) {
                max = arr[a]
        }
        maxsum += arr[a]

        if (arr[a] < min) {
                min = arr[a]
        }
        minsum += arr[a]


}



console.log(minsum - max);
console.log(maxsum - min);

