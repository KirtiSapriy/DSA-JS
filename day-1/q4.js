// Move all zero End of the Array

let arr = [0, 1, 0, 1, 0, 1, 0, 1, 0];
// output = [1,1,1,1,0,0,0,0,0]

for (let a = 0; a < arr.length; a++) {
  for (let b = a + 1; b < arr.length; b++) {
    if (arr[a] == 0) {
      let tem = arr[b];
      arr[b] = arr[a];
      arr[a] = tem;
    }
  }
}

console.log(arr);
