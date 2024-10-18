// Move all zero End of the Array

let arr = [0, 1, 0, 1, 0, 1, 0, 1, 0];
// output = [1,1,1,1,0,0,0,0,0]

for (let a = 0; a < arr.length; a++) {
  if (arr[a] == 0) {
    arr[a] = arr[1];
  }
}

console.log(arr);
