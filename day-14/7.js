let arr = [5, 6, 7, 1, 2, 3, 4]
let minimum = Infinity;

for (let a = 0; a < arr.length; a++) {
        if (arr[a] < minimum) {
                minimum = arr[a]
        }
}

console.log(minimum);
