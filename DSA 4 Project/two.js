let arr = [1, 1, 2, 2, 3, 4, 4, 5];

let a = 0;


for (let b = 0; b < arr.length; b++) {
        if (arr[a] != arr[b]) {
                a++
                arr[a] = arr[b]
        }
}

console.log((a + 1));


