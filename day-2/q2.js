let arr = [5, 3, 8, 3, 1, 5, 7, 9, 2, 5];

for (let a = 0; a < arr.length - 1; a++) {
  let max = a;
  for (let b = a + 1; b < arr.length; b++) {
    if (arr[b] > arr[max]) {
      max = b;
    }
  }
  let tem = arr[max];
  arr[max] = arr[a];
  arr[a] = tem;
}

console.log(arr);
