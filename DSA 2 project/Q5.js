
let arr = [1, 2, 3, 4, 5]


let min = Infinity;
let max = -Infinity;
let sum = 0;
for (let a = 0; a < arr.length; a++) {

        sum += arr[a]
        if (arr[a] > max) {
                max = arr[a]
        }

        if (arr[a] < min) {
                min = arr[a]
        }


}



console.log((sum - max), (sum - min))

