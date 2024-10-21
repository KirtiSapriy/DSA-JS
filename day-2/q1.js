let arr = [53, 2, 1254, 4, 5, 6];

for (let a = 0; a < arr.length - 1; a++) {
  let minI = a;

  for (let b = a + 1; b < arr.length; b++) {
    if (arr[b] < arr[minI]) {
      minI = b;
    }
  }
  let tem = arr[minI];
  arr[minI] = arr[a];
  arr[a] = tem;
}

console.log(arr);
